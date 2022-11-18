import NextLink from "next/link";
import { Link, Button, Flex } from "@chakra-ui/react";
import { clearLocalStorage } from "../../components/utilities/utilities";
import Template from "../../components/template/template";

export default function DeleteAll() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      overflowX="hidden"
      mb={200}
    >
      <Template text="Delete 🗑️ Posts" />
      <NextLink href="/home" passHref>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button mt="70%" onClick={clearLocalStorage}>
            Delete All Posts
          </Button>
        </Link>
      </NextLink>
    </Flex>
  );
}
