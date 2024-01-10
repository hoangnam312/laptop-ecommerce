import type, { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';

import Layout from './layout';

import '@/styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </NextUIProvider>
);

export default App;
