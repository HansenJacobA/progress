import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

export default function Title() {
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
          m={5}
          overflowX="hidden"
        >
          Pr☕️gress Tracker
        </Heading>
      </Link>
    </NextLink>
  );
}
