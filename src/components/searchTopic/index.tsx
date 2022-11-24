import React, { useState, useEffect } from "react";
import PostPreview from "../postPreview";
import SelectTopic from "../selectTopic";
import { Flex, Input, Text } from "@chakra-ui/react";
import getValueByKey from "../../utilities/getValueByKey";

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
      if (Array.isArray(topicPosts)) {
        setPosts(topicPosts);
      }
    }
  };

  return (
    <Flex justify="center" align="center" direction="column" gap={10} mt={10}>
      <Text fontSize={20} fontWeight="bold">
        Browse Posts by Topic 📖
      </Text>

      <Flex>
        <Input
          type="text"
          onChange={(e) => setSelectedTopic(e.target.value)}
          list="topics"
          placeholder="Select topic"
        />
        <SelectTopic topics={topics} />
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
        maxW={350}
      >
        {posts.length ? (
          posts.map((post) => (
            <PostPreview post={post} key={post.id} checkbox={false} />
          ))
        ) : (
          <Text>No previews for this topic</Text>
        )}
      </Flex>
    </Flex>
  );
}
