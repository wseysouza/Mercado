import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/global';
import { globalTheme } from '@styles/theme';
import { Layout } from '@components/Layout';
import { AppProps } from 'next/app';
import dynamic from "next/dynamic";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={globalTheme}>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  )
}

export default App
