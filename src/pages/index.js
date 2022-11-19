import Head from "next/head";

export default function Index() {
  return (
    <Head>
      <title>Work Tracker</title>
      <meta
        name="description"
        content="A daily work tracker to document progress. Can be used to maintain daily organization of work tasks and or accomplishment reflections for performance evaluations."
      />
      <meta
        name="keywords"
        content="work tracker progress organization daily records reflection evaluations promotions"
      />
      <link rel="manifest" href="app.webmanifest" />
      <meta name="theme-color" media="" />
      <script src="sw-register.js" async></script>
    </Head>
  );
}
