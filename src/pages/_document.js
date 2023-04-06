import { createGetInitialProps } from "@mantine/next";
import { Html, Head, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();
Document.getInitialProps = getInitialProps;

export default function Document({ initialProps }) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
