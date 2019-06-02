import { ADD_USER, EXIT_USER } from "../constants/users";

import { IUser } from "../types/users";

export const addUser = (user: IUser) => ({ type: ADD_USER, user });
export const exitUser = (user: number) => ({ type: EXIT_USER, user });
