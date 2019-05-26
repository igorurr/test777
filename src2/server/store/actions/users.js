const {
    ADD_USER,
    EXIT_USER,
} = require('../constants/users');

module.exports = {
    addUser: ( user ) => ({ type: ADD_USER, user }),
    exitUser: ( user ) => ({ type: EXIT_USER, user }),
};
