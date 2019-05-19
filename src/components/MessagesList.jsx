import React, { Component } from "react";
import styled from 'styled-components';

const Article = styled.article`
    flex: 1 1 auto;

`;

import { Message } from '../containers';

const MessagesList = ( { messages } ) => (
    <Article>
        {messages.map( el => (
            <Message message={el.id} />
        ) )}
    </Article>
);

export default MessagesList;