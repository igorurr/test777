var io = require('socket.io');
var http = require('http');
var moment = require('moment');

var {
	INIT_USER,
	ADD_USER,
    EXIT_USER,
    SEND_MESSAGE,
    RECEIVE_MESSAGE
} = require('../constants/websockets');

var app = http.createServer();
var io = io.listen(app);
app.listen(80);

const users = [];
let newUser = 0;
let newMsg = 0;

const logins = [
	{
		name: 'Интерессная птичка',
		count: 0
	},
	{
		name: 'Жёлтый воронёнок',
		count: 0
	},
	{
		name: 'Суровый попугай',
		count: 0
	},
	{
		name: 'Серая канарейка',
		count: 0
	},
	{
		name: 'Добрый стервятник',
		count: 0
	},
];

const colors = [
	'#003284',
	'#840000',
	'#4f8400',
	'#008442',
	'#00847b',
	'#530084',
	'#840070',
	'#b70b3b',
	'#db7e0d',
	'#33e50b',
	'#0b3502',
];

const getRandLogin = () => {
	const i = Math.round( Math.random() * logins.count + 0.5 );
	const login = `${logins[i].name} ${logins[i].count === 0 ? '' : logins[i].count + 1}`;
	logins[i].count++;
	return login;
}

const getRandColor = () => {
	const i = Math.round( Math.random() * colors.count + 0.5 );
	return colors[i];
}

io.sockets.on('connection', (socket) => {
	console.log( ADD_USER, newUser );
	const user = {
		login: getRandLogin(),
		color: getRandColor(),
		id: newUser
	};
	users.push( user );
	newUser++;
	socket.broadcast.emit( ADD_USER, user );
	socket.emit( INIT_USER, { 
		users,
		user
	} );

	socket.on(SEND_MESSAGE, ( { message } ) => {
		console.log( SEND_MESSAGE, user.id )
		const msg = {
			id: newMsg,
			message,
			user: user.id,
			date: moment().utc().valueOf()
		};
		socket.broadcast.emit( RECEIVE_MESSAGE, { message: msg } );
		socket.emit( SEND_MESSAGE, { message: msg } );
	});

	socket.on('disconnect', () => {
		console.log( EXIT_USER, user.id )
		socket.broadcast.emit( EXIT_USER, { user: user.id } );
	});
});