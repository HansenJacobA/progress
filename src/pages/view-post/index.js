import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
import ViewPost from "../../components/viewPost";
import Template from "../../components/template";

export default function ViewPost() {
  const router = useRouter();
  const { selectedPost } = router.query;
  const post = selectedPost ? JSON.parse(selectedPost) : {};
  return (
    <Flex justify="center" align="center" direction="column" overflowX="hidden">
      <Template />
      {selectedPost ? <ViewPost post={post} /> : <>No Selected Post</>}
    </Flex>
  );
}
