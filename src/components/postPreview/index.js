import React from "react";
import { Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import ViewPost from "../viewPost";

export default function PostPreview({ post }) {
  return (
    <NextLink
      href={{
        pathname: "/view-post",
        query: { selectedPost: JSON.stringify(post) },
      }}
    >
      <Link
        _hover={{
          textDecoration: "none",
        }}
      >
        <Flex
          align="center"
          direction="column"
          overflowY="scroll"
          borderRadius={10}
          height={150}
          w={350}
          _hover={{
            textDecoration: "underline",
          }}
          border="solid 4px #E6DDCB"
        >
          <ViewPost post={post} />
        </Flex>
      </Link>
    </NextLink>
  );
}
