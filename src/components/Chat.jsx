import React, { Component } from "react";

import { MessagesList, NewMessage } from '../containers';

const Chat = ( ) => (
    <article>
        <MessagesList />
        <NewMessage />
    </article>
);

export default Chat;