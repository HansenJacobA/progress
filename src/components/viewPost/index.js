import { Flex, Text } from "@chakra-ui/react";
import PostRowTitle from "./postRowTitle";
import PostRowDetails from "./postRowDetails";

export default function ViewPost({ post }) {
  return (
    <Flex w="100%" direction="column" justify="center">
      <PostRowTitle title="Topic" />
      <PostRowDetails details={post.topic} />

      <PostRowTitle title="Created" />
      <PostRowDetails details={post.createdAt} />

      <PostRowTitle title="Prior Work" />
      <PostRowDetails details={post.yesterday} />

      <PostRowTitle title="Current Work" />
      <PostRowDetails details={post.today} />

      <PostRowTitle title="Continued Work" />
      <PostRowDetails details={post.continued} />

      <PostRowTitle title="Blockers" />
      <PostRowDetails details={post.blockers} />
    </Flex>
  );
}
