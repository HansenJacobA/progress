import NextLink from "next/link";
import { Link, Button, Flex } from "@chakra-ui/react";
import { clearLocalStorage } from "../../components/utilities/utilities";
import Template from "../../components/template/template";

export default function DeleteAll() {
  return (
    <Flex justify="center" align="center" direction="column" overflowX="hidden">
      <Template text="Delete All Posts" />
      <NextLink href="/home" passHref>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button mt="70%" onClick={clearLocalStorage}>
            Delete
          </Button>
        </Link>
      </NextLink>
    </Flex>
  );
}
