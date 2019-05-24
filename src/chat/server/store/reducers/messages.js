const {
    INCREMENT_MESSAGE_ID
} = require('../constants/messages');

const initialState = {
    newMessageId: 0
};

module.exports = ( state = initialState, { type, ...action } ) => {
    switch( type ) {
        case INCREMENT_MESSAGE_ID: {
            return {
                ...state,
                newMessageId: state.newMessageId + 1,
            }
        }

        default:
            return state;
    }
};
