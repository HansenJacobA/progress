import { Flex, Text } from "@chakra-ui/react";

export default function ViewPost({ post }) {
  return (
    <Flex
      h="100vh"
      w="100vw"
      align="center"
      direction="column"
      p={10}
      gap={3}
      bgColor="#272D33"
      color="white"
    >
      <Text
        fontWeight="bold"
        w="100vw"
        bgColor="#E6DDCB"
        color="black"
        textAlign="center"
        p={2}
      >
        - Topic -
      </Text>
      <Text>{post.topic}</Text>
      <Text
        fontWeight="bold"
        w="100vw"
        bgColor="#E6DDCB"
        color="black"
        textAlign="center"
        p={2}
      >
        - Created -
      </Text>
      <Text>{post.createdAt}</Text>
      <Text
        fontWeight="bold"
        w="100vw"
        bgColor="#E6DDCB"
        color="black"
        textAlign="center"
        p={2}
      >
        - Prior Work -
      </Text>
      <Text>{post.yesterday}</Text>
      <Text
        fontWeight="bold"
        w="100vw"
        bgColor="#E6DDCB"
        color="black"
        textAlign="center"
        p={2}
      >
        - Current Work -
      </Text>
      <Text>{post.today}</Text>
      <Text
        fontWeight="bold"
        w="100vw"
        bgColor="#E6DDCB"
        color="black"
        textAlign="center"
        p={2}
      >
        - Continued Work -
      </Text>
      <Text>{post.continued}</Text>
      <Text
        fontWeight="bold"
        w="100vw"
        bgColor="#E6DDCB"
        color="black"
        textAlign="center"
        p={2}
      >
        - Blockers -
      </Text>
      <Text>{post.blockers}</Text>
    </Flex>
  );
}
