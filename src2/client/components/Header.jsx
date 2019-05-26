import React, { Component } from "react";
import styled from 'styled-components';

const HeaderStyled = styled.header`
    flex: 0 0 auto;
    margin: 30px 0;
    text-align: center;
`;

const UserNickname = styled.span`
    color: ${props => props.color};
`; 

const UserColor = styled.span`
    width: 15px;
    height: 15px;
    display: inline-block;
    background: ${props => props.color};
    vertical-align: middle;
    border-radius: 100%;
`; 

const H1 = styled.h1`
    font-family: 'Pacifico';
    font-size: 28px;
    margin-right: 19%;
    color: #006;
`; 

const H2 = styled.h2`
    margin-left: 19%;
`; 

const Header = ( { name, color, isLoading } ) => (
    <HeaderStyled>
        <H1>Чат на websocket</H1>
        <H2>
            {isLoading ? 
            (
                <>Загрузка...</>
            )
            :
            (
                <>
                    твой ник: <UserNickname color={color}>{name}</UserNickname>, 
                    цвет: <UserColor color={color} />
                </>
            )}
        </H2>
    </HeaderStyled>
);

export default Header;