import { Flex } from "@chakra-ui/react";
import { Template, PostForm } from "../../components";

export default function Home() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      <PostForm />
    </Flex>
  );
}
