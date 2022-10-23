import { Flex } from "@chakra-ui/react";
import Title from "../title/title";
import Nav from "../nav/nav";

export default function Template({ text }) {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      bgColor="#2C5159"
      color="#fff"
      overflowX="hidden"
    >
      <Title text={text} />
      <Nav />
    </Flex>
  );
}
