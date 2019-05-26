import io from 'socket.io-client';

import store from '../store/store';

import {
    init,
    addUser,
    exitUser,
    sendMessageComplete,
    receiveMessage,
} from '../store/actions/chat';

import {
    CONNECT,
    DISCONNECT,
    INIT_USER,
    ADD_USER,
    EXIT_USER,
    SEND_MESSAGE,
    RECEIVE_MESSAGE
} from '../../constants';

export let socket = null;

export default () => {
    socket = io('http://localhost:9876');

    socket.on(CONNECT, () => {
        console.log('connect to server');
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

    socket.on(DISCONNECT, () => {
        console.log('server leave');
        socket.removeAllListeners(CONNECT);
        socket.removeAllListeners(INIT_USER);
        socket.removeAllListeners(ADD_USER);
        socket.removeAllListeners(EXIT_USER);
        socket.removeAllListeners(SEND_MESSAGE);
        socket.removeAllListeners(RECEIVE_MESSAGE);
        socket.removeAllListeners(EXIT_USER);
        socket.removeAllListeners(DISCONNECT);
    });
}
