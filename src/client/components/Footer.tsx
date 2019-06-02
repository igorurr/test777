import * as React from "react";
import styled from "styled-components";

import { BackSide } from "./";

import { NewMessage } from "../containers";

const Component = styled.footer`
  position: sticky;
  bottom: 0;
  text-align: center;
  background: #f0f0f0;
`;

const Footer = () => (
  <Component>
    <NewMessage />
    <BackSide />
  </Component>
);

export default Footer;
