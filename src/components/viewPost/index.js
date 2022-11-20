import { Flex, Text } from "@chakra-ui/react";

export default function ViewPost({ post }) {
  return (
    <Flex w="100%" direction="column" gap={3} bgColor="#E6DDCB">
      <Text
        fontWeight="bold"
        w="100%"
        bgColor="#272D33"
        color="white"
        textAlign="center"
        p={2}
      >
        - Topic -
      </Text>
      <Text w="100%" textAlign="center">
        {post.topic}
      </Text>
      <Text
        fontWeight="bold"
        w="100%"
        bgColor="#272D33"
        color="white"
        textAlign="center"
        p={2}
      >
        - Created -
      </Text>
      <Text w="100%" textAlign="center">
        {post.createdAt}
      </Text>
      <Text
        fontWeight="bold"
        w="100%"
        bgColor="#272D33"
        color="white"
        textAlign="center"
        p={2}
      >
        - Prior Work -
      </Text>
      <Text w="100%" textAlign="center">
        {post.yesterday}
      </Text>
      <Text
        fontWeight="bold"
        w="100%"
        bgColor="#272D33"
        color="white"
        textAlign="center"
        p={2}
      >
        - Current Work -
      </Text>
      <Text w="100%" textAlign="center">
        {post.today}
      </Text>
      <Text
        fontWeight="bold"
        w="100%"
        bgColor="#272D33"
        color="white"
        textAlign="center"
        p={2}
      >
        - Continued Work -
      </Text>
      <Text w="100%" textAlign="center">
        {post.continued}
      </Text>
      <Text
        fontWeight="bold"
        w="100%"
        bgColor="#272D33"
        color="white"
        textAlign="center"
        p={2}
      >
        - Blockers -
      </Text>
      <Text w="100%" textAlign="center">
        {post.blockers}
      </Text>
    </Flex>
  );
}
