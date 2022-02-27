import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, ThemeProvider, CSSReset } from "@chakra-ui/react";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Head from "next/head";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Quien soy </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
