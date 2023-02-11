import { ThemeMode } from "context/ThemeMode";
import "../styles/App.scss";

export default function App({ Component, pageProps }) {
  return (
    <ThemeMode>
      <Component {...pageProps} />
    </ThemeMode>
  );
}
