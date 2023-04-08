import "n/styles/globals.css";
import "../../styles/global.css";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#fd5b61"
        startPosition={0}
        options={{ showSpinner: false, easing: "ease-out", speed: 500 }}
      />
      <Component {...pageProps} />
    </>
  );
}
