import { Flex } from "@chakra-ui/react";
import Form from "../../components/form/form";
import Template from "../../components/template/template";

export default function NewPost() {
  return (
    <Flex justify="center" align="center" direction="column" overflowX="hidden">
      <Template text="Write 📝 New Post" />
      <Form />
    </Flex>
  );
}
