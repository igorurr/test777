export const sendMessage = ( message ) => {
    socket.emit(SEND_MESSAGE, {message});
};
