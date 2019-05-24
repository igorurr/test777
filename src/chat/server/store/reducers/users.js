const {
    ADD_USER,
    EXIT_USER,
} = require('../constants/users');

const initialState = {
    users: [], // [ { id, color, name, online } ]
    newUserId: 0
};

module.exports = ( state = initialState, { type, ...action } ) => {
    switch( type ) {
        case ADD_USER: {
            const { user } = action;
            return {
                ...state,
                newUserId: state.newUserId + 1,
                users: [ ...state.users, user ]
            }
        }
        case EXIT_USER: {
            const { user } = action;
            const users = [...state.users];
            users.find( el => el.id === user ).online = false;
            return {
                ...state,
                users,
            }
        }

        default:
            return state;
    }
};
