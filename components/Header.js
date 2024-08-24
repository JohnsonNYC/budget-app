import React from "react";
import styled from "styled-components";
import { Menu } from "lucide-react";

const Header = () => {
  let isMobile = false;

  return (
    <HeaderStyled>
      <div>Budget</div>
      {isMobile ? (
        <Menu />
      ) : (
        <IconContainer>
          <div>icon</div>
          <div>icon</div>
          <div>icon</div>
          <div>icon</div>
        </IconContainer>
      )}
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
