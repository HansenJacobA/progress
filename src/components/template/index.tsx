import { useEffect } from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Title from "../title";
import NavBar from "../navBar";
import { seedUp } from "../../utilities";

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
      </Head>
      <Title />
      <NavBar />
    </Flex>
  );
}
