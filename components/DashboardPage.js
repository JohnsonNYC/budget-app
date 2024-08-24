import React from "react";
import MainDash from "./MainDash";

import styled from "styled-components";

const DashboardPage = () => {
  return (
    <Wrapper>
      <MainDash />
    </Wrapper>
  );
};

export default DashboardPage;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
