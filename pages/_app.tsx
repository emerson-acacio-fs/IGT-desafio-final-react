import { theme } from "styles/theme"
import type { AppProps } from "next/app"
import Head from "next/head"
import NextNProgress from "nextjs-progressbar"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "styles/GlobalStyles"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress
        color="#2e20f3"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp