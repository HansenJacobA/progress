import { useState, useEffect, useRef } from "react";
import { Checkbox, Flex, Input, Text, useDisclosure } from "@chakra-ui/react";
import getValueByKey from "../../utilities/getValueByKey";
import PostPreview from "../postPreview";
import SelectTopic from "../selectTopic";
import DeletionAlert from "../deletionAlert";

export default function Delete() {
  const [topics, setTopics] = useState({});
  const [selectedTopic, setSelectedTopic] = useState("");
  const [posts, setPosts] = useState([]);
  const [checkedItems, setCheckedItems] = useState(
    new Array(posts.length || 1).fill(false)
  );

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

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
        Remove Posts by Topic 🗑️
      </Text>

      <Flex gap={3}>
        <Input
          type="text"
          onChange={(e) => setSelectedTopic(e.target.value)}
          list="topics"
          placeholder="Select topic"
        />
        <SelectTopic topics={topics} />
        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) => {
            setCheckedItems(
              new Array(posts.length || 1).fill(e.target.checked)
            );
            if (posts.length === 0 && e.target.checked) {
              onOpen();
            }
          }}
        />
      </Flex>

      <DeletionAlert isOpen={isOpen} onClose={onClose} cancelRef={cancelRef} />

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
          posts.map((post, index) => {
            return (
              <Flex gap={3}>
                <PostPreview post={post} key={post.id} checkbox={true} />
                <Checkbox
                  isChecked={checkedItems[index]}
                  onChange={(e) => {
                    const checkedItemsCopy = [...checkedItems];
                    checkedItemsCopy[index] = e.target.checked;
                    setCheckedItems(checkedItemsCopy);
                  }}
                />
              </Flex>
            );
          })
        ) : (
          <Text>No previews for this topic</Text>
        )}
      </Flex>
    </Flex>
  );
}
