import React from "react";
import { Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import ViewPost from "../viewPost";

export default function PostPreview({ post }) {
  return (
    <NextLink
      href={{
        pathname: "/post",
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
          overflowX="hidden"
          borderRadius={10}
          height={150}
          minW={350}
          maxW={400}
          _hover={{
            bgColor: "#819FA6",
          }}
        >
          <ViewPost post={post} />
        </Flex>
      </Link>
    </NextLink>
  );
}
