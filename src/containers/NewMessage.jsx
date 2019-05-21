import { connect } from 'react-redux';

import { NewMessage as Comp } from '../components';

import { sendMessage, writingMessage } from '../actions/chat';

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
)( Comp );