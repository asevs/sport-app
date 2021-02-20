import * as React from 'react';

interface RoomsTemplateProps {
  children: React.ReactNode;
}
const UserPageTemplate: React.FunctionComponent<RoomsTemplateProps> = ({
  children,
}) => <>{children}</>;

export default UserPageTemplate;
