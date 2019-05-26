import {
    INIT_APP,
    EXIT_APP,
} from '../constants/app';

const initialState = {
    initIsLoading: true,
    isExit: false,
};

export default ( state = initialState, { type, ...action } ) => {
    switch( type ) {
        case INIT_APP: {
            return {
                ...state,
                initIsLoading: false,
            }
        }
        case EXIT_APP: {
            return {
                ...state,
                isExit: true
            }
        }
        
        default:
            return state;
    }
};
