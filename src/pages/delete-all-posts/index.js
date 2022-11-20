import NextLink from "next/link";
import { Link, Button, Flex, Text } from "@chakra-ui/react";
import { deleteAllPosts } from "../../utilities/localStorage";
import Template from "../../components/template";

export default function DeleteAllPosts() {
  return (
    <Flex justify="center" align="center" direction="column">
      <Template />

      <Text fontSize={24} marginTop={125} marginBottom={10} fontWeight="bold">
        Delete All Posts?
      </Text>

      <NextLink href="/home" passHref>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button onClick={deleteAllPosts}>Delete All 🗑️</Button>
        </Link>
      </NextLink>

      <NextLink href="/home" passHref>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button onClick={deleteAllPosts} mt={10}>
            Go Back 😳
          </Button>
        </Link>
      </NextLink>
    </Flex>
  );
}
