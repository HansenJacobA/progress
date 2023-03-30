import { Flex } from "@chakra-ui/react";
import { Template, RemoveItems } from "../../components";

export default function Delete() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      <RemoveItems />
    </Flex>
  );
}
