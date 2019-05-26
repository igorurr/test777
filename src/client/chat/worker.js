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
    socket = io(
        'http://localhost:9876',
        {
            reconnection: false
        }
    );

    socket.on(CONNECT, () => {
        console.log('connect to server');
    });

    socket.on(INIT_USER, ( { users, user } ) => {
        console.log(INIT_USER);
        store.dispatch( init( users, user ) );
    });

    socket.on(ADD_USER, ( { user } ) => {
        console.log(ADD_USER);
        store.dispatch( addUser( user ) );
    });

    socket.on(EXIT_USER, ( { user } ) => {
        console.log(EXIT_USER);
        store.dispatch( exitUser( user ) );
    });

    socket.on(SEND_MESSAGE, () => {
        console.log(SEND_MESSAGE);
        store.dispatch( sendMessageComplete() );
    });

    socket.on(RECEIVE_MESSAGE, ( { message } ) => {
        console.log(RECEIVE_MESSAGE);
        store.dispatch( receiveMessage( message ) );
    });

    socket.on(DISCONNECT, () => {
        console.log('server leave');
    });
}
