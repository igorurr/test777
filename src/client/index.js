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

const socket = io('http://localhost');

socket.on('connect', () => {
  console.log(socket.disconnected); // false
});

socket.on(INIT_USER, () => {
    store.dispatch()
});

socket.on(ADD_USER, () => {
});

socket.on(EXIT_USER, () => {
});

socket.on(SEND_MESSAGE, () => {
});

socket.on(RECEIVE_MESSAGE, () => {
});

socket.on('disconnect', () => {
    console.log('server leave');
});