module.exports = {
    addUser: ( user ) => ({ type: ADD_USER, user }),
    exitUser: ( user ) => ({ type: EXIT_USER, user }),
};
