import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

export default function Title({ text }) {
  return (
    <NextLink href="/home" passHref>
      <Link
        _hover={{
          textDecoration: "none",
        }}
      >
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
      </Link>
    </NextLink>
  );
}
