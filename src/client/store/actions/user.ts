import {
    INIT_USER,
    ADD_USER,
    EXIT_USER
} from '../constants/user';

import { IUser } from '../types/user';

export const initUser = ( users: Array<IUser>, user: number ) => ({
    type: INIT_USER,
    users, 
    user
});

export const addUser = ( user: IUser ) => ({
    type: ADD_USER,
    user, 
});
export const exitUser = ( user: number ) => ({
    type: EXIT_USER,
    user, 
});