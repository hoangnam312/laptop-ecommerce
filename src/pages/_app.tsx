import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './layout';
import { NextUIProvider } from '@nextui-org/react';

const App = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </NextUIProvider>
);

export default App;
