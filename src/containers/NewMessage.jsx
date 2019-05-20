import { connect } from 'react-redux';

import { NewMessage as Comp } from '../components';

import { sendMessage, writingMessage } from '../actions/chat';

export default connect(
    state => ({
        message: state.chat.message,
        sendMessageIsLoading: state.chat.sendMessageIsLoading
    }),
    dispatch => ({
        sendMessage: () => dispatch( sendMessage() ),
        changeMessage: message => dispatch( writingMessage( message ) ),
    })
)( Comp );