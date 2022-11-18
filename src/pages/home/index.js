import NextLink from "next/link";
import { Link, Button, Flex, Text } from "@chakra-ui/react";
import Template from "../../components/template/template";

export default function Home() {
  return (
    <Flex justify="center" align="center" direction="column" overflowX="hidden">
      <Template text="Pr☕️gress Tracker" />
      <Flex justify="center" align="center" direction="column" gap={10} m={100}>
        <Text fontSize="4xl">Welcome</Text>
        <NextLink href="/posts" passHref>
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
    </Flex>
  );
}
