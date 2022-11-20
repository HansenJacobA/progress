import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Title from "../title";
import NavBar from "../navBar";

export default function Template() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      bgColor="#2C5159"
      color="#fff"
    >
      <Head>
        <title>Pr☕️gress Tracker</title>
        <meta property="og:title" content="Pr☕️gress Tracker" key="title" />
        <meta
          name="description"
          content="A daily work tracker to document progress. Can be used to maintain daily organization of work tasks and or accomplishment reflections for performance evaluations."
        />
        <meta
          name="keywords"
          content="work tracker progress organization daily records reflection evaluations promotions"
        />
        <link rel="manifest" href="app.webmanifest" />
        <meta name="theme-color" media="#fff" />
      </Head>
      <Title />
      <NavBar />
    </Flex>
  );
}
