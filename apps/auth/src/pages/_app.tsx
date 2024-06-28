import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to my-new-app!</title>
      </Head>
      <main >
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
