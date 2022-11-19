import { Flex, Text } from "@chakra-ui/react";

export default function ViewPost({ post }) {
  return (
    <Flex
      align="center"
      direction="column"
      p={10}
      w="100vw"
      gap={3}
      overflowX="hidden"
      bgColor="#2C5159"
      color="white"
    >
      <Text
        fontWeight="bold"
        w="100vw"
        bgColor="#819FA6"
        textAlign="center"
        p={2}
      >
        - Topic -
      </Text>
      <Text>{post.topic}</Text>
      <Text
        fontWeight="bold"
        w="100vw"
        bgColor="#819FA6"
        textAlign="center"
        p={2}
      >
        - Created -
      </Text>
      <Text>{post.createdAt}</Text>
      <Text
        fontWeight="bold"
        w="100vw"
        bgColor="#819FA6"
        textAlign="center"
        p={2}
      >
        - Prior Work -
      </Text>
      <Text>{post.yesterday}</Text>
      <Text
        fontWeight="bold"
        w="100vw"
        bgColor="#819FA6"
        textAlign="center"
        p={2}
      >
        - Current Work -
      </Text>
      <Text>{post.today}</Text>
      <Text
        fontWeight="bold"
        w="100vw"
        bgColor="#819FA6"
        textAlign="center"
        p={2}
      >
        - Continued Work -
      </Text>
      <Text>{post.continued}</Text>
      <Text
        fontWeight="bold"
        w="100vw"
        bgColor="#819FA6"
        textAlign="center"
        p={2}
      >
        - Blockers -
      </Text>
      <Text>{post.blockers}</Text>
    </Flex>
  );
}
