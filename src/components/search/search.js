import React, { useState, useEffect } from "react";
import Preview from "../preview/preview";
import { Flex, Button, Input, Text } from "@chakra-ui/react";
import { ALL_TOPICS, ALL_POSTS, getItem } from "../utilities/utilities";

export default function Search() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [posts, setPosts] = useState([]);
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    const localTopics = getItem(ALL_TOPICS);
    setAllTopics(localTopics || allTopics);
  }, [false]);

  const getPosts = async (e) => {
    e.preventDefault();
    if (allTopics.find(({ name }) => name === selectedTopic) !== undefined) {
      const localPosts = getItem(ALL_POSTS);
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
          posts.map((post) => <Preview post={post} key={post.id} />)
        ) : (
          <Text>No previews for this topic</Text>
        )}
      </Flex>
    </Flex>
  );
}
