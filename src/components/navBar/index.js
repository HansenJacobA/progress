import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NavBar() {
  return (
    <Flex
      w="100vw"
      align="center"
      fontSize={16}
      justify="center"
      gap={50}
      p={3}
      bgColor="#E6DDCB"
      color="black"
    >
      <NextLink href="/delete-all-posts" passHref>
        <Link
          textDecoration="none"
          _hover={{
            textDecoration: "underline",
          }}
        >
          Delete All
        </Link>
      </NextLink>
      <NextLink href="/create-new-post" passHref>
        <Link
          textDecoration="none"
          _hover={{
            textDecoration: "underline",
          }}
        >
          New Post
        </Link>
      </NextLink>
      <NextLink href="/search-topics" passHref>
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
