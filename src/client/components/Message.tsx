import * as React from "react";
import moment from 'moment';
import styled from 'styled-components';

import { IUser } from "../store/types/user";

const Component = styled.article`
    background: #fff;
    min-height: 70px;
    margin: 7px 0;
    padding: 14px;
    padding-left: 55px;
    width: max-content;
    max-width: 61%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    ${props => props.isMy && 'align-self: flex-end;'}

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 70px;
        height: 70px;
        border-radius: 5px;
        background: linear-gradient(
            135deg, 
            ${props => props.color} 0%, 
            #fff0 50%
        );
    }
`;

const Header = styled.header`
    flex: 0 0 auto;
`;

const NickName = styled.span`
    color: ${props => props.color};
`;

const Main = styled.main`
    margin-top: 7px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Online = styled.span`
    width: 7px;
    height: 7px;
    background: ${props => props.online ? 'red' : 'gray'};
    display: inline-block;
    border-radius: 100%;
    vertical-align: text-top;
    margin-right: 3px;
`;

export interface IMessageProps {
    id: Number 
    date: number;
    user: IUser;
    isMy: boolean; 
    online: boolean;
    message: string;
};

const Message = ( { 
    date, 
    user, 
    message, 
    isMy, 
    online 
}: IMessageProps ) => (
    <Component
        color={user.color}
        isMy={isMy}
    >
        <Header>
            <Online online={online} />
            <NickName color={user.color}>{user.name}</NickName>
            - {moment(date).format('kk:mm DD MMM')}
        </Header>
        <Main>{message}</Main>
    </Component>
);

export default Message;