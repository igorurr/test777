import React from "react";
import { connect } from 'react-redux';

import {  } from './';
import { Header as Comp } from '../components';

export default connect(
    state => {
        if( state.chat.user == -1 )
            return {
                isLoading: true
            };

        const { name, color } = state.chat.users.find( user => user.id === state.chat.user );

        return {
            isLoading: false,
            name,
            color,
        }
    }
)( Comp );