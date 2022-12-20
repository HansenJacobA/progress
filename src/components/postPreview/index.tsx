import { Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import Post from "../post";

export default function PostPreview({ post }) {
  return (
    <NextLink
      href={{
        pathname: "/view-post",
        query: {
          topicId: post.topicId,
          postId: post.id,
        },
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
          w={300}
          _hover={{
            border: "solid 4px white",
          }}
          border="solid 4px #4c5667"
        >
          <Post post={post} />
        </Flex>
      </Link>
    </NextLink>
  );
}
