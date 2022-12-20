import NextLink from "next/link";
import { Link, Button, Flex } from "@chakra-ui/react";

export default function Welcome() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5}>
      <NextLink href="/search" passHref>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button fontWeight="normal">Search Posts</Button>
        </Link>
      </NextLink>

      <NextLink href="/new-post" passHref>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button fontWeight="normal">New Post 📝</Button>
        </Link>
      </NextLink>
    </Flex>
  );
}
