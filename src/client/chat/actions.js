import { socket } from './worker';

import {
    SEND_MESSAGE,
} from '../../constants';

export const sendMessage = ( message ) => {
    socket.emit(SEND_MESSAGE, {message});
};