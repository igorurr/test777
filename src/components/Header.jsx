import React from "react";
import styled from 'styled-components';

import { device } from './helpers/sizes';

const Component = styled.header`
    text-align: center;
    position: sticky;
    top: 0;
    padding: 30px 0;
    margin: 0;
    background: #f0f0f0;
    z-index: 101;
    cursor: default;

    &::after {
        content: "";
        position: absolute;
        left: -40px;
        right: -40px;
        bottom: 0;
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

    @media ${device.tablet} {
        &::after {
            left: 0;
            right: 0;
        }
    }
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

const Logo = styled.h1`
    font-family: 'Pacifico';
    font-size: 28px;
    margin-right: 19%;
    color: #006;
`; 

const Content = styled.h2`
    margin-left: 19%;
`; 

const Header = ( { name, color, initIsLoading } ) => (
    <Component>
        <Logo>Чат на websocket</Logo>
        <Content>
            {initIsLoading ? 
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
        </Content>
    </Component>
);

export default Header;