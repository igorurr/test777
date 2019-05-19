import {
    INIT,
    ADD_USER,
    EXIT_USER,
    SENDING_MESSAGE,
    SEND_MESSAGE_COMPLETE,
    RECEIVE_MESSAGE,
    WRITING_MESSAGE,
} from '../constants/chat';

const initialState = {
    initIsLoading: true,
    sendMessageIsLoading: false,
    message: '',
    messages: [],   // [ { id, date, user, message } ]
    users: [],  // [ { id, color, name } ]
    user: -1 // id в users
};

export default ( state = initialState, { type, ...action } ) => {
    switch( type ) {
        case INIT: {
            const { messages, users, user } = action;
            return {
                ...state,
                initIsLoading: false,
                messages, 
                users, 
                user
            }
        }
        
        case ADD_USER: {
            const { users } = action;
            return {
                ...state,
                users,
            }
        }
        case EXIT_USER: {
            const { users } = action;
            return {
                ...state,
                users,
            }
        }

        case SENDING_MESSAGE: {
            return {
                ...state,
                sendMessageIsLoading: true,
            }
        }
        case SEND_MESSAGE_COMPLETE: {
            return {
                ...state,
                sendMessageIsLoading: false,
            }
        }
        case RECEIVE_MESSAGE: {
            const { messages } = action;
            return {
                ...state,
                messages,
            }
        }
        
        case WRITING_MESSAGE: {
            const { message } = action;
            return {
                ...state,
                message,
            }
        }

        default:
            return state;
    }
};