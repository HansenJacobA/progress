import dynamic from "next/dynamic";
import { Flex } from "@chakra-ui/react";
import { Template } from "../../components";

const RemoveItems = dynamic(() => import("../../components/removeItems"));

export default function Delete() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      <RemoveItems />
    </Flex>
  );
}
