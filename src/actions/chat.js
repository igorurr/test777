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

export const init = ( messages, users, user ) => ({
    type: INIT,
    messages, 
    users, 
    user
});

export const addUser = ( users ) => ({
    type: ADD_USER,
    users, 
});
export const exitUser = ( users ) => ({
    type: EXIT_USER,
    users, 
});

export const sendingMessage = () => ({
    type: SENDING_MESSAGE,
});
export const sendMessageComplete = () => ({
    type: SEND_MESSAGE_COMPLETE,
});
export const receiveMessage = ( messages ) => ({
    type: RECEIVE_MESSAGE,
    messages
});

export const writingMessage = ( message ) => ({
    type: WRITING_MESSAGE,
    message
});

export const cleareMessage = ( typeCleare ) => ({
    type: CLEARE_MESSAGES,
    typeCleare
});