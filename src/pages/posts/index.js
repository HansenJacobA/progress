import { Flex } from "@chakra-ui/react";
import Template from "../../components/template/template";
import Search from "../../components/search/search";

export default function Posts() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      bgColor="white"
      pb={10}
      overflowX="hidden"
    >
      <Template text="View Posts 📖 by Topic" />
      <Search />
    </Flex>
  );
}
