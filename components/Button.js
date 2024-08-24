import React from "react";
import styled from "styled-components";

const Button = ({ children, handleClick, ...rest }) => {
  return (
    <StyledButton onClick={handleClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background: var(--graphite-400);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin: 0.5rem;
  transition: background 0.3s;

  &:enabled {
    background: var(--graphite-500);
  }

  &:hover {
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;
