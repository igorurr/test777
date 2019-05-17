import React, { Component } from "react";
import { connect } from 'react-redux';

import {  } from './';
import { Message as Comp } from '../components';

class Message extends Component {

    static getDerivedStateFromProps( { getMessage, id }, state ) {
        return {
            ...state,
            message: getMessage( id )
        }
    }

    render() {
        const { message } = this.props;
        return (
            <Comp {...message} />
        );
    }
};

export default connect(
    state => ({
        getMessage: id => state.chat.messages.find( el => el.id === id )
    })
)( Message );