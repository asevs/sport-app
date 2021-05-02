import React from 'react';
import styled from 'styled-components';
import Login from '../components/organisms/Login/Login';

const StyledWrapper = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`;

const LoginPage: React.FC = () => (
  <StyledWrapper>
    <Login />
  </StyledWrapper>
);

export default LoginPage;
