import dynamic from "next/dynamic";
import { Flex } from "@chakra-ui/react";
import { Template } from "../../components";

const SearchTopic = dynamic(() => import("../../components/searchTopic"));

export default function Search() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      <SearchTopic />
    </Flex>
  );
}
