import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import SearchTopic from "../../components/searchTopic";

export default function Search() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      <SearchTopic />
    </Flex>
  );
}
