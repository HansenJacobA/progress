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
          content="work tracker progress organization daily records reflection evaluations promotions"
        />
        <link rel="manifest" href="app.webmanifest" />
      </Head>
      <Title />
      <NavBar />
    </Flex>
  );
}
