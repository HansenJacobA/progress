import { Flex } from "@chakra-ui/react";
import Subject from "./subject";
import Details from "./details";

export default function Post({ post }) {
  return (
    <Flex w="100%" direction="column" justify="center">
      <Subject subject="Topic" />
      <Details details={post.topic} />

      <Subject subject="Created" />
      <Details details={post.createdAt} />

      <Subject subject="Prior Work" />
      <Details details={post.yesterday} />

      <Subject subject="Current Work" />
      <Details details={post.today} />

      <Subject subject="Continued Work" />
      <Details details={post.continued} />

      <Subject subject="Blockers" />
      <Details details={post.blockers} />
    </Flex>
  );
}
