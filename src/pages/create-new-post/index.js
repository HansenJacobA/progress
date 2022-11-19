import { Flex } from "@chakra-ui/react";
import CreatePostForm from "../../components/createPostForm";
import Template from "../../components/template";

export default function CreateNewPost() {
  return (
    <Flex justify="center" align="center" direction="column" overflowX="hidden">
      <Template />
      <CreatePostForm />
    </Flex>
  );
}
