import React, { Component } from "react";
import { connect } from 'react-redux';

import {  } from './';
import { NewMessage as Comp } from '../components';

import { actions } from '../store';
const { sendMessage, writingMessage } = actions;

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
