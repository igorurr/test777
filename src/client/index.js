import io from 'socket.io-client';

import store from '../containers/helpers/store';
import {
    init,
    addUser,
    exitUser,
    sendMessageComplete,
    receiveMessage,
} from '../actions/chat';

import {
	INIT_USER,
	ADD_USER,
    EXIT_USER,
    SEND_MESSAGE,
    RECEIVE_MESSAGE
} from '../constants/websockets';

const socket = io('http://localhost:9876');

socket.on('connect', () => {
    console.log('connecte to server');
});

socket.on(INIT_USER, ( { users, user } ) => {
    store.dispatch( init( users, user ) );
});

socket.on(ADD_USER, ( { user } ) => {
    store.dispatch( addUser( user ) );
});

socket.on(EXIT_USER, ( { user } ) => {
    store.dispatch( exitUser( user ) );
});

socket.on(SEND_MESSAGE, () => {
    store.dispatch( sendMessageComplete() );
});

socket.on(RECEIVE_MESSAGE, ( { message } ) => {
    store.dispatch( receiveMessage( message ) );
});

socket.on('disconnect', () => {
    console.log('server leave');
});

export const sendMessage = ( message ) => {
    socket.emit(SEND_MESSAGE, {message});
}
