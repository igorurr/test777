import React, { Component } from "react";
import styled from 'styled-components';

const Article = styled.article`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
`;

import { Message } from '../containers';

const MessagesList = ( { messages } ) => (
    <Article>
        {messages.map( el => (
            <Message key={el.id} id={el.id} />
        ) )}
    </Article>
);

export default MessagesList;