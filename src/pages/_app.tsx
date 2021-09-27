import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global';
import { globalTheme } from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={globalTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
