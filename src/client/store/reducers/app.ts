import {
    INIT_APP,
    EXIT_APP,
} from '../constants/app';

import { IAppStore } from '../types/app';

const initialState: IAppStore = {
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
