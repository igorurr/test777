import React from "react";
import styled from 'styled-components';

const Component = styled.article`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
`;

import { Message } from '../containers';

const MessagesList = ( { messages } ) => (
    <Component>
        {messages.map( el => (
            <Message key={el.id} id={el.id} />
        ) )}
    </Component>
);

export default MessagesList;