import {
    INIT,
    EXIT,
} from '../constants/app';

const initialState = {
    initIsLoading: true,
    isExit: false,
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
        case EXIT: {
            return {
                ...state,
                isExit: true
            }
        }
        
        default:
            return state;
    }
};
