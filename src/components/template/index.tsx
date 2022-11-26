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
        {/* <html lang="en" /> */}
        <title>Pr☕️gress Tracker</title>
        <meta property="og:title" content="Pr☕️gress Tracker" key="title" />
        <meta
          name="description"
          content="A daily progress tracker to document accomplishments. Can be used to maintain daily organization of work tasks and or accomplishment reflections for performance evaluations."
        />
        <meta
          name="keywords"
          content="work tracker progress organization daily records reflection evaluations promotions"
        />
        <link rel="manifest" href="app.webmanifest" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="apple-touch-icon" href="/icons/icon-512.png" />
      </Head>
      <Title />
      <NavBar />
    </Flex>
  );
}
