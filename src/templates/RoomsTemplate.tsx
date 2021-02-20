import * as React from 'react';

interface RoomsTemplateProps {
  children: React.ReactNode;
}
const RoomsTemplate: React.FunctionComponent<RoomsTemplateProps> = ({children,}) =>
<>{children}</>;

export default RoomsTemplate;
