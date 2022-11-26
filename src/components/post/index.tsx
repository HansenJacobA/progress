import { Flex } from "@chakra-ui/react";
import Subject from "./subject";
import Detail from "./detail";
import { subjects } from "../../utilities/postContent";
import { details } from "../../utilities/postContent";

export default function Post({ post }: { post: Post }) {
  const postDetails = details(post);
  return (
    <Flex w="100%" direction="column" justify="center">
      {postDetails.map((detail, index) => {
        const subject = subjects[index];
        return (
          <Flex
            w="100%"
            direction="column"
            justify="center"
            key={`${detail + subject}`}
          >
            <Subject subject={subject} />
            <Detail detail={detail} />
          </Flex>
        );
      })}
    </Flex>
  );
}
