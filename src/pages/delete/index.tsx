import NextLink from "next/link";
import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import DeleteContent from "../../components/deleteContent";

export default function Delete() {
  return (
    <Flex justify="center" align="center" direction="column">
      <Template />
      <DeleteContent />
    </Flex>
  );
}
