import * as io from "socket.io";
import * as http from "http";

import { SEND_MESSAGE } from "../constants";

import { connect, sendMessage, disconnect } from "./listners";

import { store } from "./store/";

console.log("server runing...");

const app = http.createServer();
const ioServer = io.listen(app);
app.listen(9876);

ioServer.sockets.on("connection", socket => {
  const id = connect(
    null,
    store,
    socket,
    ioServer,
  );

  socket.on(SEND_MESSAGE, data =>
    sendMessage({ ...data, userId: id }, store, socket, ioServer),
  );

  socket.on("disconnect", () => disconnect({ id }, store, socket, ioServer));
});

console.log("server runed");
