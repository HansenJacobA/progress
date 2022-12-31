import Template from "../../components/template";
import { Flex } from "@chakra-ui/react";
import PostForm from "../../components/postForm";

export default function Home() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      <PostForm />
    </Flex>
  );
}
