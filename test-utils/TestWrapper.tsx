import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import { theme } from "../styles/theme";

interface Props {
  children: ReactNode;
}

const TestWrapper: React.FunctionComponent<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default TestWrapper;
