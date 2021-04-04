import * as React from 'react';
import UserPageTemplate from './UserPageTemplate';
interface RoomsTemplateProps {
  children: React.ReactNode;
}
const RoomsTemplate: React.FC<RoomsTemplateProps> = ({ children }) => (
  <UserPageTemplate>{children}</UserPageTemplate>
);

export default RoomsTemplate;
