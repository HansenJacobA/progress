import { Flex, Text } from "@chakra-ui/react";

export default function Post({ post }) {
  return (
    <Flex
      align="center"
      direction="column"
      p={5}
      borderRadius={10}
      w={450}
      gap={2}
      overflowX="hidden"
    >
      <Text fontWeight="bold">Topic</Text>
      <Text>{post.topic}</Text>
      <Text fontWeight="bold">Created</Text>
      <Text>{post.createdAt}</Text>
      <Text fontWeight="bold">Prior Work</Text>
      <Text>{post.yesterday}</Text>
      <Text fontWeight="bold">Current Work</Text>
      <Text>{post.today}</Text>
      <Text fontWeight="bold">Continued Work</Text>
      <Text>{post.continued}</Text>
      <Text fontWeight="bold">Blockers</Text>
      <Text>{post.blockers}</Text>
    </Flex>
  );
}
