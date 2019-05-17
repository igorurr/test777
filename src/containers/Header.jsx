import React, { Component } from "react";
import { connect } from 'react-redux';

import {  } from './';
import { Header as Comp } from '../components';

class Header extends Component {
    closeApp() {
        console.log('прила закрывается')
    }

    render() {
        const { user } = this.props;

        return (
            <Comp user={user} closeApp={this.closeApp} />
        );
    }
};

export default connect(
    state => ({
        user: state.chat.user
    })
)( Header );