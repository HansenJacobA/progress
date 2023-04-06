import { Flex } from "@chakra-ui/react";
import { SearchTopic, Template } from "../../components";

export default function Search() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      <SearchTopic />
    </Flex>
  );
}
