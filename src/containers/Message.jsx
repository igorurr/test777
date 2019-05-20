import React, { Component } from "react";
import { connect } from 'react-redux';

import { Message as Comp } from '../components';

class Message extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: null
        }
    }

    static getDerivedStateFromProps( { getMessage, getUser, isMy, id }, state ) {
        const message = getMessage( id );
        return {
            ...state,
            message: {
                ...message,
                user: getUser( message.user ),
                isMy: isMy( message.user )
            }
        }
    }

    render() {
        const { message } = this.state;
        return (
            <Comp {...message} />
        );
    }
};

export default connect(
    state => ({
        getMessage: id => state.chat.messages.find( el => el.id === id ),
        getUser: id => state.chat.users.find( el => el.id === id ),
        isMy: id => state.chat.user === id,
    })
)( Message );