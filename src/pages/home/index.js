import NextLink from "next/link";
import { Link, Button, Flex, Text } from "@chakra-ui/react";
import Template from "../../components/template";

export default function Home() {
  return (
    <Flex justify="center" align="center" direction="column">
      <Template />
      <Flex justify="center" align="center" direction="column" gap={10} m={100}>
        <Text fontSize={34}>Welcome 👋</Text>
        <NextLink href="/search-topics" passHref>
          <Link
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button>Search Posts</Button>
          </Link>
        </NextLink>
        <NextLink href="/create-new-post" passHref>
          <Link
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button>New Post 📝</Button>
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
}
