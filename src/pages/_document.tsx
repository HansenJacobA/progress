import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="A daily progress tracker to document accomplishments. Can be used to maintain daily organization of work tasks and or accomplishment reflections for performance evaluations."
        />
        <meta
          name="keywords"
          content="work tracker progress organization daily records reflection evaluations promotions job career professional occupation"
        />
        <link rel="manifest" href="app.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/icon-512.png" />
        <meta name="theme-color" content="#1A202C" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
