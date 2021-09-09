import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 8vh;
  width: 100%;
  text-align: center;
  background: black;
  line-height: 70px;
  color: #fff;
  font-size: 20px;
  letter-spacing: 0.4px;
  position: absolute;
  bottom: 0;
  @media (max-width: 959px) {
    height: 50px;
    line-height: 50px;
  }
`;

function Footer() {
  return <FooterContainer>Google Keep Clone 2021</FooterContainer>;
}

export default Footer;
