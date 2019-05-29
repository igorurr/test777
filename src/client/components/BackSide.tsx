import * as React from "react";
import styled from 'styled-components';

const Component = styled.footer`
    text-align: center;
    background: #d2d2e7;
    box-shadow: 0 0 60px 40px #d2d2e7;
    padding: 12px;
    z-index: 100;
    cursor: default;
`;

const BackSide = ( ) => (
    <Component>GitHub Беляков И. А. 2019</Component>
);

export default BackSide;