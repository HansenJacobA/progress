import { useState, useEffect, useRef } from "react";
import {
  Checkbox,
  Flex,
  Input,
  Text,
  useDisclosure,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import getValueByKey from "../../utilities/getValueByKey";
import removeSelected from "../../utilities/removeSelected";
import PostPreview from "../postPreview";
import SelectTopic from "../selectTopic";
import DeletionAlert from "../deletionAlert";

export default function RemoveItems() {
  const [topics, setTopics] = useState({
    topic: { id: "NA", name: "NA" },
  });
  const [selectedTopic, setSelectedTopic] = useState("");
  const [posts, setPosts] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(false);
  const [checkedItems, setCheckedItems] = useState(
    new Array(posts.length || 1).fill(false)
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const toast = useToast();

  useEffect(() => {
    const savedTopics = getValueByKey("topics");
    setTopics(savedTopics);
  }, [posts]);

  useEffect(() => {
    setPosts([]);
    getPosts();
  }, [selectedTopic]);

  useEffect(() => {
    setIsIndeterminate(checkedItems.some((check) => check) && !allChecked);
  }, [checkedItems, allChecked]);

  useEffect(() => {
    setAllChecked(checkedItems.every((check) => check));
  }, [checkedItems]);

  const getPosts = () => {
    const topic = topics[selectedTopic];
    if (topic) {
      const topicPosts = getValueByKey(topic.id);
      setPosts(topicPosts);
      setCheckedItems(new Array(topicPosts.length).fill(false));
    }
  };

  return (
    <Flex justify="center" align="center" direction="column" gap={10} mt={10}>
      <Text fontSize={20} fontWeight="bold">
        Remove Posts by Topic 🗑️
      </Text>

      <Flex gap={5}>
        <Input
          type="text"
          onChange={(e) => setSelectedTopic(e.target.value)}
          list="topics"
          placeholder="Select topic"
        />

        <SelectTopic topics={topics} />

        <IconButton
          variant="outline"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<DeleteIcon />}
          onClick={() => {
            if (isIndeterminate || allChecked) {
              const topic = topics[selectedTopic];
              if (topic) {
                const savedPosts = removeSelected(topic.id, checkedItems);
                setPosts(savedPosts);
                toast({
                  title: "Shelves Cleaned",
                  description: `We removed your selected posts from: ${topic.name}`,
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }
            }
          }}
        />

        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) => {
            setAllChecked(e.target.checked);
            setCheckedItems(
              new Array(posts.length || 1).fill(e.target.checked)
            );

            if (posts.length === 0 && e.target.checked) {
              setCheckedItems(new Array(posts.length || 1).fill(false));
              setAllChecked(false);
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
              <Flex gap={3} key={post.id}>
                <PostPreview post={post} checkbox={true} />
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
