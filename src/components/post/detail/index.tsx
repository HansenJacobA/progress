import { Text, Flex } from "@chakra-ui/react";

export default function Detail({ detail }) {
  return (
    <Flex w="100%" justify="center">
      <Text textAlign="center" p={2} w={350}>
        {detail}
      </Text>
    </Flex>
  );
}
