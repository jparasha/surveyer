import React from 'react';
import '../styles/globals.css';
import { Provider } from 'next-auth/client';
import Head from 'next/head';
import Header from '../components/organisms/Header';

export default function App({ Component, pageProps }) {
  return (
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
  );
}
