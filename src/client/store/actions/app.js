import {
    INIT,
    EXIT
} from '../constants/app';

export const init = ( users, user ) => ({
    type: INIT,
    users, 
    user
});
export const exit = () => ({
    type: EXIT,
});