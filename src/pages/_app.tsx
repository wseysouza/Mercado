import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@styles/global';
import { globalTheme } from '@styles/theme';
import { Layout } from '@components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={globalTheme}>
      <Layout>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </Layout>
    </ThemeProvider>
  )
}
