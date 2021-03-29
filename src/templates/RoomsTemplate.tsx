import * as React from 'react';

interface RoomsTemplateProps {
  children: React.ReactNode;
}
const RoomsTemplate: React.FC<RoomsTemplateProps> = ({ children }) => (
  <>{children}</>
);

export default RoomsTemplate;
