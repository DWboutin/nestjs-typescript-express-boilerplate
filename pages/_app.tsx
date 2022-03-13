import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";

import { theme } from "../styles/theme";
import GlobalStyle from "../styles/globalStyle";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
