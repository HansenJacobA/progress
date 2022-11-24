import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
import getValueByKey from "../../utilities/getValueByKey";
import Post from "../../components/post";
import Template from "../../components/template";

export default function ViewPost() {
  const router = useRouter();
  const { topicId, postId } = router.query;

  let post: Post;

  if (topicId) {
    const posts = getValueByKey(topicId.toString());

    if (Array.isArray(posts)) {
      post = posts.find(({ id }) => {
        return id === postId;
      });
    }
  }

  return (
    <Flex justify="center" align="center" direction="column">
      <Template />
      {post ? <Post post={post} /> : <>No Selected Post</>}
    </Flex>
  );
}
