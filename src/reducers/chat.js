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
    users: [],  // [ { id, color, name, online } ]
    user: -1 // id в users
};

export default ( state = initialState, { type, ...action } ) => {
    switch( type ) {
        case INIT: {
            const { users, user } = action;
            return {
                ...state,
                initIsLoading: false,
                users, 
                user
            }
        }
        
        case ADD_USER: {
            const { user } = action;
            return {
                ...state,
                users: [ ...state.users, user ],
            }
        }
        case EXIT_USER: {
            const { user } = action;
            const users = [...state.users];
            try {
                users.find( el => el.id === user ).online = false;
                return {
                    ...state,
                    users,
                }
            }
            catch (err) {
                console.log( users, user );
                return state;
            }

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
                message: ''
            }
        }
        case RECEIVE_MESSAGE: {
            const { message } = action;
            return {
                ...state,
                messages: [ ...state.messages, message ],
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