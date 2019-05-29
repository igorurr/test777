import * as React from "react";
import styled from 'styled-components';

const Component = styled.article`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
`;

import { IMessageProps } from './';
import { Message } from '../containers';

export interface IMessagesListProps {
    messages: Array<IMessageProps>;
};

const MessagesList = ( { messages }: IMessagesListProps ) => (
    <Component>
        {messages.map( el => (
            <Message key={el.id} id={el.id} />
        ) )}
    </Component>
);

export default MessagesList;