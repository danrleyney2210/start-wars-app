import { ThemeProvider } from "styled-components";
import Routes from './routes';
import { GlobalStyle } from "styles/global";
import theme from "styles/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}

