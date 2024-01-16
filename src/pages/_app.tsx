import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";

import Layout from "./layout";

import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";

const App = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <ToastContainer closeOnClick />
  </NextUIProvider>
);

export default App;
