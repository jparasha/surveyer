import React, { useEffect } from 'react';
import '../styles/globals.css';
import { Provider } from 'next-auth/client';
import { orange, deepOrange } from '@material-ui/core/colors';
import Head from 'next/head';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const mainPrimaryColor = orange[500];
const mainSecondaryColor = deepOrange[900];
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: mainPrimaryColor
    },
    secondary: {
      main: mainSecondaryColor
    }
  }
});

export default function App({ Component, pageProps }) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={'styles.container'}>
        <Head>
          <title>Surveyed | Home</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
        </Head>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </div>
    </ThemeProvider>
  );
}
