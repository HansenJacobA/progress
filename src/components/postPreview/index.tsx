import { Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import Post from "../post";

export default function PostPreview({
  post,
  checkbox,
}: {
  post: Post;
  checkbox: boolean;
}) {
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
          w={checkbox ? 300 : 350}
          _hover={{
            border: "solid 4px #819FA6",
          }}
          border="solid 4px #E6DDCB"
        >
          <Post post={post} />
        </Flex>
      </Link>
    </NextLink>
  );
}
