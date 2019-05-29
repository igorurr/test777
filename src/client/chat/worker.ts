import io from 'socket.io-client';

import store from '../store/store';

import { initApp, exitApp } from '../store/actions/app';
import { sendMessageComplete, receiveMessage } from '../store/actions/chat';
import { initUser, addUser, exitUser } from '../store/actions/user';

import { IMessage } from '../store/types/chat';
import { IUser } from '../store/types/user';

import {
    CONNECT,
    DISCONNECT,
    INIT_USER,
    ADD_USER,
    EXIT_USER,
    SEND_MESSAGE,
    RECEIVE_MESSAGE
} from '../../constants';

export let socket: any = {};

interface IInitUserArgs {
    users: Array<IUser>;
    user: number;
}

interface IAddUserArgs {
    user: IUser;
}

interface IExitUserArgs {
    user: number;
}

interface IReceiveMessageArgs {
    message: IMessage;
}

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

    socket.on(INIT_USER, ( { users, user }: IInitUserArgs ) => {
        store.dispatch( initUser( users, user ) );
        store.dispatch( initApp() );
    });

    socket.on(ADD_USER, ( { user }: IAddUserArgs ) => {
        store.dispatch( addUser( user ) );
    });

    socket.on(EXIT_USER, ( { user }: IExitUserArgs ) => {
        store.dispatch( exitUser( user ) );
    });

    socket.on(SEND_MESSAGE, () => {
        store.dispatch( sendMessageComplete() );
    });

    socket.on(RECEIVE_MESSAGE, ( { message }: IReceiveMessageArgs ) => {
        store.dispatch( receiveMessage( message ) );
    });

    socket.on(DISCONNECT, () => {
        console.log('server leave');
        store.dispatch( exitApp() );
    });
}
