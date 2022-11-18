import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Nav() {
  return (
    <Flex
      w="100vw"
      align="center"
      fontSize={18}
      justify="center"
      gap={50}
      p={5}
      bgColor="#D17E13"
      overflowX="hidden"
    >
      <NextLink href="/delete" passHref>
        <Link
          textDecoration="none"
          _hover={{
            textDecoration: "underline",
          }}
        >
          Delete All
        </Link>
      </NextLink>
      <NextLink href="/new-post" passHref>
        <Link
          textDecoration="none"
          _hover={{
            textDecoration: "underline",
          }}
        >
          New Post
        </Link>
      </NextLink>
      <NextLink href="/posts" passHref>
        <Link
          textDecoration="none"
          _hover={{
            textDecoration: "underline",
          }}
        >
          Search Posts
        </Link>
      </NextLink>
    </Flex>
  );
}
