const { createUser } = require('../user/');
const moment = require('moment/moment');

const {
	INIT_USER,
	ADD_USER,
	EXIT_USER,
	SEND_MESSAGE,
	RECEIVE_MESSAGE
} = require('../../constants');

const { actions: {
	incrementMessageId,
	addUser,
	exitUser,
} } = require('../store');

const createAction = require('./createAction');

module.exports = {
    connect: createAction( ( data, store, socket, ioServer  ) => {
	    console.log( ADD_USER, newUser );

    	const user = createUser( store.getState().users.newUserId );

    	store.dispatch( addUser( user ) );

    	socket.broadcast.emit( ADD_USER, { user } );
    	socket.emit( INIT_USER, {
    		users: store.getState().users.users,
    		user: user.id
    	} );
    }),

    sendMessage: createAction( ( { message }, store, socket, ioServer  ) => {
        setTimeout( ()=> {
            console.log( SEND_MESSAGE, user.id );
            const msg = {
                id: newMsg,
                message,
                user: user.id,
                date: moment().utc().valueOf()
            };
            newMsg++;
            ioServer.sockets.emit( RECEIVE_MESSAGE, { message: msg } );
            socket.emit( SEND_MESSAGE, { message: msg } );
        }, 1000 );
    }),

    disconnect: createAction( ( data, store, socket, ioServer  ) => {
		console.log( EXIT_USER, user.id );
		socket.broadcast.emit( EXIT_USER, { user: user.id } );
		users.find( el => el.id === user.id ).online = false;
    }),
};
