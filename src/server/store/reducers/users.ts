import { ADD_USER, EXIT_USER } from "../constants/users";

import { IUser, IUserStore } from "../types/users";

const initialState: IUserStore = {
  users: [], // [ { id, color, name, online } ]
  newUserId: 0,
};

export default (state = initialState, { type, ...action }) => {
  switch (type) {
    case ADD_USER: {
      const { user } = action;
      return {
        ...state,
        newUserId: state.newUserId + 1,
        users: [...state.users, user],
      };
    }
    case EXIT_USER: {
      const { user } = action;
      const users = [...state.users];
      const offlineUser = users.find(el => el.id === user);
      offlineUser && (offlineUser.online = false);
      return {
        ...state,
        users,
      };
    }

    default:
      return state;
  }
};
