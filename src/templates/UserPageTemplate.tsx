import * as React from 'react';

interface RoomsTemplateProps {
  children: React.ReactNode;
}
const UserPageTemplate: React.FC<RoomsTemplateProps> = ({ children }) => (
  <>{children}</>
);

export default UserPageTemplate;
