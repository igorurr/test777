import {
    INIT,
    ADD_USER,
    EXIT_USER,
} from '../constants/user';

const initialState = {
    users: [],  // [ { id, color, name, online } ]
    user: -1 // id в users
};

export default ( state = initialState, { type, ...action } ) => {
    switch( type ) {
        case INIT: {
            const { users, user } = action;
            return {
                ...state,
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
            users.find( el => el.id === user ).online = false;
            return {
                ...state,
                users,
            };
        }

        default:
            return state;
    }
};
