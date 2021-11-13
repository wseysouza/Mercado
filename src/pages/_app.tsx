import React from 'react';
import ScrollToTop from "@components/ScrollToTop";


import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/global';
import { globalTheme } from '@styles/theme';
import { Layout } from '@components/Layout';
import { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {


  return (
    <ThemeProvider theme={globalTheme}>
      <ScrollToTop />
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>
  )
}

export default App
