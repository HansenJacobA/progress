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
      overflowX="hidden"
    >
      <Title />
      <NavBar />
    </Flex>
  );
}
