import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import RemoveItems from "../../components/removeItems";

export default function Delete() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      <RemoveItems />
    </Flex>
  );
}
