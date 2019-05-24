const io = require('socket.io');
const http = require('http');

const {
	SEND_MESSAGE
} = require('../constants');

const {
	connect,
	sendMessage,
	disconnect
} = require('./listners');

const store = require('./store/');

console.log('server runing...');

const app = http.createServer();
const ioServer = io.listen(app);
app.listen(9876);

ioServer.sockets.on('connection', (socket) => {
	connect( null, store, socket, ioServer );

	socket.on( SEND_MESSAGE, ( data ) => sendMessage( data, store, socket, ioServer ) );

	socket.on( 'disconnect', () => disconnect( null, store, socket, ioServer ) );
});

console.log('server runed');
