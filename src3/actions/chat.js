import {
    INIT,
    ADD_USER,
    EXIT_USER,
    SENDING_MESSAGE,
    SEND_MESSAGE_COMPLETE,
    RECEIVE_MESSAGE,
    WRITING_MESSAGE,
    CLEARE_MESSAGES
} from '../constants/chat';

import store from '../containers/helpers/store';

import { sendMessage as sendMessageToServer } from '../client/';

export const init = ( users, user ) => ({
    type: INIT,
    users, 
    user
});

export const addUser = ( user ) => ({
    type: ADD_USER,
    user, 
});
export const exitUser = ( user ) => ({
    type: EXIT_USER,
    user, 
});

const sendingMessage = () => ({
    type: SENDING_MESSAGE,
});
export const sendMessageComplete = () => ({
    type: SEND_MESSAGE_COMPLETE,
});
export const receiveMessage = ( message ) => ({
    type: RECEIVE_MESSAGE,
    message
});

export const writingMessage = ( message ) => ({
    type: WRITING_MESSAGE,
    message
});

export const cleareMessages = ( typeCleare ) => ({
    type: CLEARE_MESSAGES,
    typeCleare
});



export const sendMessage = () => (dispatch) => {
    dispatch( sendingMessage() );
    sendMessageToServer( store.getState().chat.message );
};