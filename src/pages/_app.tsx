import React from 'react';
<<<<<<< HEAD

=======
import { AppProps } from 'next/app';
>>>>>>> updateDetailsv4
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@styles/global';
import { globalTheme } from '@styles/theme';
import { Layout } from '@components/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';

import AppProvider from '@hooks/index';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {


  return (
    <ThemeProvider theme={globalTheme}>
      <Layout>
        <AppProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </AppProvider>
      </Layout>
    </ThemeProvider>
  )
}

export default App
