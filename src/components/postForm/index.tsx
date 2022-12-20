import { useState, useEffect } from "react";
import NextLink from "next/link";
import {
  Link,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import getValueByKey from "../../utilities/getValueByKey";
import upsertTopic from "../../utilities/upsertTopic";
import createPost from "../../utilities/createPost";
import SelectTopic from "../selectTopic";

export default function PostForm() {
  const [topicName, setTopicName] = useState("");
  const [yesterday, setYesterday] = useState("");
  const [today, setToday] = useState("");
  const [continued, setContinued] = useState("");
  const [blockers, setBlockers] = useState("");
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const storedTopics = Object.values(getValueByKey("topics"));
    setTopics(storedTopics);
  }, []);

  const toast = useToast();

  function sendSubmits() {
    const topicId = upsertTopic({ name: topicName });
    createPost({
      topicId,
      topicName,
      yesterday,
      today,
      continued,
      blockers,
    });

    toast({
      title: "Post Created",
      description: `We shelved your post next to the topic: ${topicName}`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }

  return (
    <FormControl
      alignContent="center"
      justifyContent="center"
      textAlign="center"
      w={300}
    >
      <Text fontSize={20} fontWeight="light">
        Create a new post 📝
      </Text>

      <FormLabel mt={5} textAlign="center">
        Topic
      </FormLabel>
      <Input
        type="text"
        placeholder=". . ."
        onChange={(e) => setTopicName(e.target.value)}
        list="topics"
      />
      <SelectTopic topics={topics} />

      <FormLabel mt={5} textAlign="center">
        What was done yesterday?
      </FormLabel>
      <Textarea
        onChange={(e) => setYesterday(e.target.value)}
        placeholder=". . ."
        size="sm"
        borderRadius={5}
      />

      <FormLabel mt={5} textAlign="center">
        What was done today?
      </FormLabel>
      <Textarea
        onChange={(e) => setToday(e.target.value)}
        placeholder=". . ."
        size="sm"
        borderRadius={5}
      />

      <FormLabel mt={5} textAlign="center">
        What needs continued work?
      </FormLabel>
      <Textarea
        onChange={(e) => setContinued(e.target.value)}
        placeholder=". . ."
        size="sm"
        borderRadius={5}
      />

      <FormLabel mt={5} textAlign="center">
        Any blockers?
      </FormLabel>
      <Textarea
        onChange={(e) => setBlockers(e.target.value)}
        placeholder=". . ."
        size="sm"
        borderRadius={5}
      />

      <NextLink href="/home" passHref>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button m={5} onClick={sendSubmits} fontWeight="normal">
            Submit
          </Button>
        </Link>
      </NextLink>
    </FormControl>
  );
}
