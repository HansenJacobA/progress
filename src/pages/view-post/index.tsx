import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
import { Template, Post } from "../../components";
import { getValueByKey } from "../../utilities";

export default function ViewPost() {
  const router = useRouter();
  const { topicId, postId } = router.query;

  let post;

  if (topicId) {
    const posts = getValueByKey(topicId.toString());

    post = posts.find(({ id }: { id: string }) => {
      return id === postId;
    });
  }

  return (
    <Flex justify="center" align="center" direction="column" mb={10}>
      <Template />
      {post ? <Post post={post} /> : <>No Selected Post</>}
    </Flex>
  );
}
