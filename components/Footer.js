import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <FooterStyled>Made by JohnsonNYC</FooterStyled>;
};

export default Footer;

const FooterStyled = styled.footer`
  margin-top: auto;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: black;
  padding: 1rem;
`;
