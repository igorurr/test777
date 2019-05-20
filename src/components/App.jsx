
import React from "react";
import styled from 'styled-components';

import { Chat, Footer } from './';
import { Header } from '../containers';

import { device } from './helpers/sizes';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: auto;
    background: #0000000f;
    box-shadow: 0 0 60px 40px #0000000f;

    width: 900px;

    @media ${device.laptop} {
        width: 600px;
    }

    @media ${device.tablet} {
        width: 100%;
    }
`;

const App = () => (
    <Main>
        <Header />
        <Chat />
        <Footer />
    </Main>
);

export default App;