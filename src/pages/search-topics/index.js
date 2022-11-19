import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import SearchTopics from "../../components/searchTopics";

export default function Search() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      bgColor="white"
      pb={10}
    >
      <Template />
      <SearchTopics />
    </Flex>
  );
}
