import React, { Component } from "react";
import styled from 'styled-components';

import { MessagesList, NewMessage } from '../containers';

const Article = styled.article`
    flex: 1 1 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;

    &:before, &:after {
        content: "";
        position: absolute;
        left: -40px;
        right: -40px;
        height: 1px;
        background: linear-gradient(
            to right, 
            rgba(0,0,0,0) 0%, 
            rgba(0,0,0,0.15) 15%, 
            rgba(0,0,0,0.3) 50%, 
            rgba(0,0,0,0.15) 85%, 
            rgba(0,0,0,0) 100%
        );
    }

    &:before {
        top: 0;
    }

    &:after {
        bottom: 0;
    }
`

const Chat = ( ) => (
    <Article>
        <MessagesList />
        <NewMessage />
    </Article>
);

export default Chat;