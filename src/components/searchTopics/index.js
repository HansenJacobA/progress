import React, { useState, useEffect } from "react";
import PostPreview from "../postPreview";
import { Flex, Button, Input, Text } from "@chakra-ui/react";
import {
  ALL_TOPICS_KEY,
  ALL_POSTS_KEY,
  getLocalStorageKeyValue,
} from "../../utilities/localStorage";

export default function SearchTopics() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [posts, setPosts] = useState([]);
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    const localTopics = getLocalStorageKeyValue(ALL_TOPICS_KEY);
    setAllTopics(localTopics || allTopics);
  }, [false]);

  const getPosts = async (e) => {
    e.preventDefault();
    if (allTopics.find(({ name }) => name === selectedTopic) !== undefined) {
      const localPosts = getLocalStorageKeyValue(ALL_POSTS_KEY);
      const topicPosts = localPosts.filter(
        (post) => post.topic === selectedTopic
      );
      setPosts(topicPosts);
    }
  };

  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gap={10}
      mt={10}
      overflowX="hidden"
    >
      <Text fontSize={20} fontWeight="bold">
        Browse Posts by Topic 📖
      </Text>
      <Flex gap={5}>
        <Input
          type="text"
          onChange={(e) => setSelectedTopic(e.target.value)}
          list="topics"
          placeholder="Select topic"
        />
        <datalist id="topics">
          {allTopics.map(({ name, id }) => (
            <option value={name || "No Name"} key={id} />
          ))}
          ;
        </datalist>

        <Button onClick={getPosts}>Search</Button>
      </Flex>

      <Flex overflowY="scroll" direction="column" gap={10} h={350}>
        {posts.length ? (
          posts.map((post) => <PostPreview post={post} key={post.id} />)
        ) : (
          <Text>No previews for this topic</Text>
        )}
      </Flex>
    </Flex>
  );
}
