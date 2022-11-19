import { Flex } from "@chakra-ui/react";
import Template from "../../components/template/template";
import SearchTopics from "../../components/searchTopics";

export default function SearchTopics() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      bgColor="white"
      pb={10}
      overflowX="hidden"
      overflowY="hidden"
    >
      <Template />
      <SearchTopics />
    </Flex>
  );
}
