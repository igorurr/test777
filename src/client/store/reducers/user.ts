import { INIT_USER, ADD_USER, EXIT_USER } from "../constants/user";

import { IUserStore } from "../types/user";

const initialState: IUserStore = {
  users: [], // [ { id, color, name, online } ]
  user: -1, // id в users
};

export default (state = initialState, { type, ...action }) => {
  switch (type) {
    case INIT_USER: {
      const { users, user } = action;
      return {
        ...state,
        users,
        user,
      };
    }

    case ADD_USER: {
      const { user } = action;
      return {
        ...state,
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
