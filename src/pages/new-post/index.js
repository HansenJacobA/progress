import { Flex } from "@chakra-ui/react";
import Form from "../../components/form/form";
import Template from "../../components/template/template";

export default function NewPost() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      bgColor="white"
      overflowX="hidden"
    >
      <Template text="Create New Entry" />
      <Form />
    </Flex>
  );
}
