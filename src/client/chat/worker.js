import io from 'socket.io-client';

import store from '../store/store';

import { initApp, exitApp } from '../store/actions/app';
import { sendMessageComplete, receiveMessage } from '../store/actions/chat';
import { initUser, addUser, exitUser } from '../store/actions/user';

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
        store.dispatch( initUser( users, user ) );
        store.dispatch( initApp() );
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
        store.dispatch( exitApp() );
    });
}
