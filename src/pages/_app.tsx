import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@styles/global';
import { globalTheme } from '@styles/theme';
import { Layout } from '@components/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';

import AppProvider from '@hooks/index';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {


  return (
    <ThemeProvider theme={globalTheme}>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
          <GlobalStyle />
        </Layout>
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
