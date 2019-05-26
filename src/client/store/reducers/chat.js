import {
    SENDING_MESSAGE,
    SEND_MESSAGE_COMPLETE,
    RECEIVE_MESSAGE,
    WRITING_MESSAGE,
} from '../constants/chat';

const initialState = {
    sendMessageIsLoading: false,
    message: '',
    messages: [],   // [ { id, date, user, message } ]
};

export default ( state = initialState, { type, ...action } ) => {
    switch( type ) {       
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
