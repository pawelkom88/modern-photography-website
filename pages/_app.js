import { ThemeMode } from "context/ThemeMode";
import Head from "next/head";
import "../styles/App.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Giulia Gartner Photography</title>
      </Head>
      <ThemeMode>
        <Component {...pageProps} />
      </ThemeMode>
    </>
  );
}
