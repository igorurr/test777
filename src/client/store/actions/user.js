import {
    INIT_USER,
    ADD_USER,
    EXIT_USER
} from '../constants/user';

export const initUser = ( users, user ) => ({
    type: INIT_USER,
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