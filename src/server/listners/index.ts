import { createUser } from "../user/";
import * as moment from "moment";

import {
  INIT_USER,
  ADD_USER,
  EXIT_USER,
  SEND_MESSAGE,
  RECEIVE_MESSAGE,
} from "../../constants";

import { actions } from "../store";
const {
  messages: { incrementMessageId },
  users: { addUser, exitUser },
} = actions;

import createAction from "./createAction";

const SEND_MESSAGE_DELAY = 1000;

export const connect = createAction((data, store, socket, ioServer) => {
  console.log(ADD_USER, store.getState().users.newUserId);

  const user = createUser(store.getState().users.newUserId);

  store.dispatch(addUser(user));

  socket.broadcast.emit(ADD_USER, { user });
  socket.emit(INIT_USER, {
    users: store.getState().users.users,
    user: user.id,
  });

  return user.id;
});

export const sendMessage = createAction(
  ({ message, userId }, store, socket, ioServer) => {
    setTimeout(() => {
      console.log(SEND_MESSAGE, userId);
      const msg = {
        id: store.getState().messages.newMessageId,
        message,
        user: userId,
        date: moment()
          .utc()
          .valueOf(),
      };
      store.dispatch(incrementMessageId());
      ioServer.sockets.emit(RECEIVE_MESSAGE, { message: msg });
      socket.emit(SEND_MESSAGE, { message: msg });
    }, SEND_MESSAGE_DELAY);
  },
);

export const disconnect = createAction(({ id }, store, socket, ioServer) => {
  console.log(EXIT_USER, id);
  store.dispatch(exitUser(id));
  socket.broadcast.emit(EXIT_USER, { user: id });
});
