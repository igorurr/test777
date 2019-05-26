import React, { Component } from "react";
import { connect } from 'react-redux';

import {  } from './';
import { MessagesList as Comp } from '../components';

class MessagesList extends Component {
    render() {
        const { messages } = this.props;
        return (
            <Comp messages={messages} />
        );
    }
};

export default connect(
    state => ({
        messages: state.chat.messages
    })
)( MessagesList );