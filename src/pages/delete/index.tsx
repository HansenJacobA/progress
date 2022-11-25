import NextLink from "next/link";
import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import RemoveItems from "../../components/removeItems";

export default function Delete() {
  return (
    <Flex justify="center" align="center" direction="column">
      <Template />
      <RemoveItems />
    </Flex>
  );
}
