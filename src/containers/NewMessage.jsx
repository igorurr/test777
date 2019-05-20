import React, { Component } from "react";
import { connect } from 'react-redux';

import {  } from './';
import { NewMessage as Comp } from '../components';

import { sendMessage, writingMessage } from '../actions/chat';

class NewMessage extends Component {
    render() {
        return (
            <Comp {...this.props} />
        );
    }
};

export default connect(
    state => ({
        message: state.chat.message,
        sendMessageIsLoading: state.chat.sendMessageIsLoading
    }),
    dispatch => ({
        sendMessage: () => dispatch( sendMessage() ),
        changeMessage: message => dispatch( writingMessage( message ) ),
    })
)( NewMessage );