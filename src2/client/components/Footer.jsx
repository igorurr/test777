import React, { Component } from "react";
import styled from 'styled-components';

const FooterStyled = styled.footer`
    flex: 0 0 auto;
    text-align: center;
    background: #0000aa20;
    box-shadow: 0 0 60px 40px #0000aa20;
    margin: 12px;
`;

const Footer = ( ) => (
    <FooterStyled>
        GitHub Беляков И. А. 2019
    </FooterStyled>
);

export default Footer;