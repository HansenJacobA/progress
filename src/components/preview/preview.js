import React from "react";
import { Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import Post from "../post/post";

export default function Preview({ post }) {
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
          borderRadius={5}
          height={150}
          minW={350}
          maxW={400}
          bgColor="#2C5159"
          color="white"
          _hover={{
            bgColor: "#819FA6",
          }}
        >
          <Post post={post} />
        </Flex>
      </Link>
    </NextLink>
  );
}
