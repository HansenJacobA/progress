import { Flex } from "@chakra-ui/react";
import { RemoveItems, Template } from "../../components";

export default function Delete() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      <RemoveItems />
    </Flex>
  );
}
