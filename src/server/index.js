var io = require('socket.io');
var http = require('http');
var moment = require('moment');

console.log('server runing...');

var {
	INIT_USER,
	ADD_USER,
    EXIT_USER,
    SEND_MESSAGE,
    RECEIVE_MESSAGE
} = require('../constants/websockets');

var app = http.createServer();
var io = io.listen(app);
app.listen(9876);

const users = []; // [ { id, color, name, online } ]
let newUser = 0;
let newMsg = 0;

const logins = [
	{
		name: 'Интерессная птичка',
		count: 0
	},
	{
		name: 'Маленький воронёнок',
		count: 0
	},
	{
		name: 'Суровый попугай',
		count: 0
	},
	{
		name: 'Милая канарейка',
		count: 0
	},
	{
		name: 'Добрый стервятник',
		count: 0
	},
	{
		name: 'Важнный стриж',
		count: 0
	},
	{
		name: 'Невероятный снигирь',
		count: 0
	},
	{
		name: 'Ранняя пташка',
		count: 0
	},
	{
		name: 'Обычная синичка',
		count: 0
	},
];

const colors = [
	'#003284',
	'#004B84',
	'#0080E2',
	'#5881D3',
	'#FF0000',
	'#840000',
	'#4f8400',
	'#008442',
	'#00847b',
	'#530084',
	'#840070',
	'#D157A8',
	'#b70b3b',
	'#db7e0d',
	'#33e50b',
	'#70CE56',
	'#0b3502',
];

const getRandLogin = () => {
	const i = Math.floor( Math.random() * logins.length );
	const login = `${logins[i].name} ${logins[i].count === 0 ? '' : logins[i].count + 1}`;
	logins[i].count++;
	return login;
}

const getRandColor = () => {
	const i = Math.floor( Math.random() * colors.length );
	return colors[i];
}

io.sockets.on('connection', (socket) => {
	console.log( ADD_USER, newUser );
	const user = {
		id: newUser,
		color: getRandColor(),
		name: getRandLogin(),
		online: true
	};
	users.push( user );
	newUser++;
	socket.broadcast.emit( ADD_USER, { user } );
	socket.emit( INIT_USER, { 
		users,
		user: user.id
	} );

	socket.on(SEND_MESSAGE, ( { message } ) => {
		console.log( SEND_MESSAGE, user.id );
		setTimeout( ()=>{
			const msg = {
				id: newMsg,
				message,
				user: user.id,
				date: moment().utc().valueOf()
			};
			newMsg++;
			io.sockets.emit( RECEIVE_MESSAGE, { message: msg } )
			socket.emit( SEND_MESSAGE, { message: msg } );
		}, 1000 );
	});

	socket.on('disconnect', () => {
		console.log( EXIT_USER, user.id )
		socket.broadcast.emit( EXIT_USER, { user: user.id } );
		users.find( el => el.id === user.id ).online = false;
	});
});

console.log('server runed');
