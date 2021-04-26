import * as React from 'react';
import UserPageTemplate from './UserPageTemplate';
import Login from '../components/organisms/Login/Login';
interface RoomsTemplateProps {
  children: React.ReactNode;
}
const RoomsTemplate: React.FC<RoomsTemplateProps> = ({ children }) => (
  <UserPageTemplate>
    {children}
    <Login />
  </UserPageTemplate>
);

export default RoomsTemplate;
