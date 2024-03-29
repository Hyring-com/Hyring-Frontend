import React, { useEffect } from "react";
import Head from "next/head";
// Mui
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
//Global CSS
import "../styles/globals.css";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
// Font
import localFont from "next/font/local";

// scroll animation declaration
import AOS from "aos";
import "aos/dist/aos.css";

// font declaration
const whyteRegular = localFont({
  src: "../../public/fonts/whyte/WhyteInktrap-Regular.woff",
  variable: "--font-whyte-regular",
  declarations: [{ prop: "ascent-override", value: "100%" }],
  display: "swap",
});
const whyteLight = localFont({
  src: "../../public/fonts/whyte/WhyteInktrap-Light.woff",
  variable: "--font-whyte-light",
  declarations: [{ prop: "ascent-override", value: "100%" }],
  display: "swap",
});
const whyteMedium = localFont({
  src: "../../public/fonts/whyte/WhyteInktrap-Medium.woff",
  variable: "--font-whyte-medium",
  declarations: [{ prop: "ascent-override", value: "100%" }],
  display: "swap",
});
const whyteBold = localFont({
  src: "../../public/fonts/whyte/WhyteInktrap-Bold.woff",
  variable: "--font-whyte-bold",
  declarations: [{ prop: "ascent-override", value: "100%" }],
  display: "swap",
});

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main
        className={`${whyteRegular.variable} ${whyteMedium.variable} ${whyteLight.variable} ${whyteBold.variable}`}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </CacheProvider>
  );
};

export default App;
