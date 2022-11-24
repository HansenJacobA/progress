import NextLink from "next/link";
import { Link, Button, Flex, Text } from "@chakra-ui/react";

export default function Welcome() {
  return (
    <Flex justify="center" align="center" direction="column" gap={10} m={100}>
      <Text fontSize={32}>Welcome 👋</Text>

      <NextLink href="/search" passHref>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button>Search Posts</Button>
        </Link>
      </NextLink>

      <NextLink href="/new-post" passHref>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button>New Post 📝</Button>
        </Link>
      </NextLink>
    </Flex>
  );
}
