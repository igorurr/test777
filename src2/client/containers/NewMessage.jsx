import { connect } from 'react-redux';

import { NewMessage } from '../components';

import { actions } from '../store';
const { sendMessage, writingMessage } = actions.chat;

export default connect(
    ({  chat: { initIsLoading, message, sendMessageIsLoading } }) => ({
        initIsLoading,
        sendMessageIsLoading,
        message,
    }),
    dispatch => ({
        sendMessage: () => dispatch( sendMessage() ),
        changeMessage: message => dispatch( writingMessage( message ) ),
    })
)( NewMessage );