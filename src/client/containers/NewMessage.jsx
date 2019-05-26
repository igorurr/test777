import { connect } from 'react-redux';

import { NewMessage as Comp } from '../components';

import { actions } from '../store';
const { sendMessage, writingMessage } = actions.chat;

const NewMessage = connect(
    ({  chat: { initIsLoading, message, sendMessageIsLoading } }) => ({
        initIsLoading,
        sendMessageIsLoading,
        message,
    }),
    dispatch => ({
        sendMessage: () => dispatch( sendMessage() ),
        changeMessage: message => dispatch( writingMessage( message ) ),
    })
)( Comp );

export default NewMessage;