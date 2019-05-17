import React, { Component } from "react";
import { connect } from 'react-redux';

import {  } from './';
import { NewMessage as Comp } from '../components';

class NewMessage extends Component {
    render() {
        const { sendMessage, message } = this.props;
        
        return (
            <Comp message={message} sendMessage={sendMessage}  />
        );
    }
};

export default connect(
    state => ({
        message: state.chat.message
    }),
    dispatch => ({
        sendMessage: message => dispatch( message )
    })
)( NewMessage );