import {
    INIT,
    ADD_USER,
    EXIT_USER,
    SENDING_MESSAGE,
    SEND_MESSAGE_COMPLETE,
    RECEIVE_MESSAGE,
    WRITING_MESSAGE
} from '../constants/chat';

import { store } from '../';

import { actions } from '../../chat/client';
const { sendMessage: sendMessageToServer } = actions;

const init = ( users, user ) => ({
    type: INIT,
    users, 
    user
});

const addUser = ( user ) => ({
    type: ADD_USER,
    user, 
});
const exitUser = ( user ) => ({
    type: EXIT_USER,
    user, 
});

const sendingMessage = () => ({
    type: SENDING_MESSAGE,
});
const sendMessageComplete = () => ({
    type: SEND_MESSAGE_COMPLETE,
});
const receiveMessage = ( message ) => ({
    type: RECEIVE_MESSAGE,
    message
});

const writingMessage = ( message ) => ({
    type: WRITING_MESSAGE,
    message
});



const sendMessage = () => (dispatch) => {
    dispatch( sendingMessage() );
    sendMessageToServer( store.getState().chat.message );
};

export default {
    init,
    addUser,
    exitUser,
    sendMessageComplete,
    receiveMessage,
    writingMessage,
    sendMessage
};
