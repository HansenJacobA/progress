import { useEffect } from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Title from "../title";
import NavBar from "../navBar";
import seedUp from "../../utilities/seedUp";

export default function Template() {
  useEffect(() => {
    seedUp();
  }, []);

  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      bgColor="#272D33"
      color="white"
    >
      <Head>
        <title>Pr☕️gress Tracker</title>
        <meta property="og:title" content="Pr☕️gress Tracker" key="title" />
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
      <Title />
      <NavBar />
    </Flex>
  );
}
