import React, { Component } from "react";

import { Message } from '../containers';

const MessagesList = ( { messages } ) => (
    <article>
        {messages.map( el => (
            <Message message={el.id} />
        ) )}
    </article>
);

export default MessagesList;