const {
    INCREMENT_MESSAGE_ID
} = require('../constants/messages');

module.exports = {
    incrementMessageId: ( ) => ({ type: INCREMENT_MESSAGE_ID })
};
