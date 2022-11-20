import { Text, Flex } from "@chakra-ui/react";

export default function PostRowTitle({ title }) {
  return (
    <Flex w="100%" justify="center" bgColor="#272D33">
      <Text fontWeight="bold" color="white" textAlign="center" p={2}>
        - {title} -
      </Text>
    </Flex>
  );
}
