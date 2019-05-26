import React, { Component } from "react";
import styled from 'styled-components';

import checkPressEnter from './helpers/checkPressEnter';

const Article = styled.article`
    flex: 0 0 auto;

    display: flex;
    height: 89px;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: -60px;
        right: -60px;
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
`;

const Textarea = styled.textarea`
    flex: 1 1 auto;
    padding-top: 8px;
    padding-right: 3px;
    resize: none;
    background: transparent;
`;

const Button = styled.button`
    flex: 0 0 auto;
    width: 83px;
    background: transparent;
    font-size: 28px;
    color: #0005;

    &:not(:disabled){
        cursor: pointer;
    }
`;

const NewMessage = ( { sendMessage, changeMessage, message, sendMessageIsLoading } ) => (
    <Article>
        <Textarea 
            onChange={(e)=>changeMessage(e.target.value)}
            placeholder='Введи сообщение и отправь его самолётом...'
            value={sendMessageIsLoading ? 'Отправка сообщения...' : message}
            onKeyDown={checkPressEnter(sendMessage)}
            disabled={sendMessageIsLoading}
        />
        <Button 
            onClick={sendMessage}
            disabled={sendMessageIsLoading}
        >
            ✈
        </Button>
    </Article>
);

export default NewMessage;