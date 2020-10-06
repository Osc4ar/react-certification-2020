import React from 'react';
import styled from '@emotion/styled';

const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -3rem;
`;

function Layout({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

export default Layout;
