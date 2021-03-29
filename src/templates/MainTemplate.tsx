import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/MainTheme';
import GlobalStyle from '../theme/GlobalStyle';

const MaintTemplate: React.FunctionComponent = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    <GlobalStyle />
  </>
);

export default MaintTemplate;
