import {
  SENDING_MESSAGE,
  SEND_MESSAGE_COMPLETE,
  RECEIVE_MESSAGE,
  WRITING_MESSAGE,
} from "../constants/chat";

import { IMessage } from "../types/chat";

import { store } from "../";

// использование import { actions } from '../../chat' вызывает ошибку
import * as actions from "../../chat/actions";
const { sendMessage: sendMessageToServer } = actions;

const sendingMessage = () => ({
  type: SENDING_MESSAGE,
});
export const sendMessageComplete = () => ({
  type: SEND_MESSAGE_COMPLETE,
});
export const receiveMessage = (message: IMessage) => ({
  type: RECEIVE_MESSAGE,
  message,
});

export const writingMessage = (message: string) => ({
  type: WRITING_MESSAGE,
  message,
});

export const sendMessage = () => (dispatch) => {
  dispatch(sendingMessage());
  sendMessageToServer(store.getState().chat.message);
};
