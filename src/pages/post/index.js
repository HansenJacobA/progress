import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
import Post from "../../components/post/post";
import Template from "../../components/template/template";

export default function ViewPost() {
  const router = useRouter();
  const { selectedPost } = router.query;
  const post = selectedPost ? JSON.parse(selectedPost) : {};
  return (
    <Flex justify="center" align="center" direction="column" overflowX="hidden">
      <Template text="Work Progress Tracker" />
      {selectedPost ? <Post post={post} /> : <>No Selected Post</>}
    </Flex>
  );
}
