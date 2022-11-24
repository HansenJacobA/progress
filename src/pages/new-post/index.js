import { Flex } from "@chakra-ui/react";
import PostForm from "../../components/postForm";
import Template from "../../components/template";

export default function CreateNewPost() {
  return (
    <Flex justify="center" align="center" direction="column">
      <Template />
      <PostForm />
    </Flex>
  );
}
