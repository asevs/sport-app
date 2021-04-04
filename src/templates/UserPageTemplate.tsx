import * as React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/organisms/Navbar/Navbar';
interface IUserPageTemplateProps {
  children: React.ReactNode;
}

const StyledWrapper = styled.div``;

const UserPageTemplate: React.FC<IUserPageTemplateProps> = ({ children }) => (
  <StyledWrapper>
    <Sidebar />
    {children}
  </StyledWrapper>
);

export default UserPageTemplate;
