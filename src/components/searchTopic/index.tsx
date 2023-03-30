/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import PostPreview from "../postPreview";
import SelectTopic from "../selectTopic";
import { Flex, Input, Text } from "@chakra-ui/react";
import { Post } from "../../types";
import { getValueByKey } from "../../utilities";

export default function SearchTopic() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [posts, setPosts] = useState([]);
  const [topics, setTopics] = useState({});

  useEffect(() => {
    const savedTopics = getValueByKey("topics");
    setTopics(savedTopics);
  }, [false]);

  useEffect(() => {
    setPosts([]);
    getPosts();
  }, [selectedTopic]);

  const getPosts = () => {
    const topic = topics[selectedTopic];
    if (topic) {
      const topicPosts = getValueByKey(topic.id);
      setPosts(topicPosts);
    }
  };

  return (
    <Flex justify="center" align="center" direction="column" gap={5}>
      <Text fontSize={20} fontWeight="light">
        Browse Posts by Topic 📖
      </Text>

      <Flex>
        <Input
          type="text"
          onChange={(e) => setSelectedTopic(e.target.value)}
          list="topics"
          placeholder="Select topic"
        />
        <SelectTopic topics={Object.values(topics)} />
      </Flex>

      <Flex
        overflowY="scroll"
        overflowX="hidden"
        direction="column"
        gap={10}
        h={350}
        align="center"
        pl={15}
        pr={15}
        w={300}
      >
        {posts.length ? (
          posts.map((post: Post) => <PostPreview post={post} key={post.id} />)
        ) : (
          <Text>No previews for this topic</Text>
        )}
      </Flex>
    </Flex>
  );
}
