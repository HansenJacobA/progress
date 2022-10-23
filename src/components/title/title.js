import { Heading } from "@chakra-ui/react";

export default function Title({ text }) {
  return (
    <Heading
      as="h1"
      size="xl"
      noOfLines={1}
      textAlign="center"
      m={10}
      overflowX="hidden"
    >
      {text}
    </Heading>
  );
}
