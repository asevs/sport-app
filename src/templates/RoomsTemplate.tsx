import * as React from 'react';
import UserPageTemplate from './UserPageTemplate';
import Login from '../components/organisms/Login/Login';
import styled from 'styled-components';
interface RoomsTemplateProps {
  children: React.ReactNode;
}

const StyledWrapper = styled.div``;
const RoomsTemplate: React.FC<RoomsTemplateProps> = ({ children }) => (
  <UserPageTemplate>
    {children}
    <Login />
  </UserPageTemplate>
);

export default RoomsTemplate;
