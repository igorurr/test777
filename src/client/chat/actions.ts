import { socket } from "./worker";

import { SEND_MESSAGE } from "../../constants";

export const sendMessage = (message: string) => {
  socket.emit(SEND_MESSAGE, { message });
};
