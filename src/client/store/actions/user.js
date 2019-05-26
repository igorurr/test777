import {
    INIT,
    ADD_USER,
    EXIT_USER
} from '../constants/user';

export const init = ( users, user ) => ({
    type: INIT,
    users, 
    user
});

export const addUser = ( user ) => ({
    type: ADD_USER,
    user, 
});
export const exitUser = ( user ) => ({
    type: EXIT_USER,
    user, 
});