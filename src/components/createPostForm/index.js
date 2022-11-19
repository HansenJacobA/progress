import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { nanoid } from "nanoid";
import {
  Link,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {
  ALL_TOPICS_KEY,
  ALL_POSTS_KEY,
  getLocalStorageKeyValue,
  setLocalStorageKeyValue,
} from "../../utilities/localStorage";

export default function CreatePostForm() {
  const [topic, setTopic] = useState("");
  const [yesterday, setYesterday] = useState("");
  const [today, setToday] = useState("");
  const [continued, setContinued] = useState("");
  const [blockers, setBlockers] = useState("");
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    const localTopics = getLocalStorageKeyValue(ALL_TOPICS_KEY);
    if (localTopics) {
      setAllTopics(localTopics);
    } else {
      setLocalStorageKeyValue(ALL_TOPICS_KEY, allTopics);
    }
  }, [false]);

  const sendSubmits = async () => {
    if (allTopics.find(({ name }) => name === topic) == undefined) {
      const newTopic = {
        id: nanoid(),
        createdAt: new Date().toLocaleString(),
        name: topic,
        complete: false,
        completedAt: null,
      };
      const newAllTopics = [...allTopics, newTopic];
      setLocalStorageKeyValue(ALL_TOPICS_KEY, newAllTopics);
    }

    const newEntry = {
      id: nanoid(),
      createdAt: new Date().toLocaleString(),
      topic,
      yesterday,
      today,
      continued,
      blockers,
    };

    const localEntries = getLocalStorageKeyValue(ALL_POSTS_KEY);

    if (localEntries) {
      setLocalStorageKeyValue(ALL_POSTS_KEY, [...localEntries, newEntry]);
    } else {
      setLocalStorageKeyValue(ALL_POSTS_KEY, [newEntry]);
    }
  };

  return (
    <FormControl
      alignContent="center"
      justifyContent="center"
      textAlign="center"
      p={5}
      width={450}
      overflowX="hidden"
    >
      <FormLabel mt={5} textAlign="center">
        Topic
      </FormLabel>
      <Input
        type="text"
        placeholder=". . ."
        onChange={(e) => setTopic(e.target.value)}
        list="topics"
      />

      <datalist id="topics">
        {allTopics.map(({ name, id }) => (
          <option value={name || "No Name"} key={id} />
        ))}
        ;
      </datalist>

      <FormLabel mt={5} textAlign="center">
        What was done yesterday?
      </FormLabel>
      <Textarea
        onChange={(e) => setYesterday(e.target.value)}
        placeholder=". . ."
        size="sm"
      />

      <FormLabel mt={5} textAlign="center">
        What was done today?
      </FormLabel>
      <Textarea
        onChange={(e) => setToday(e.target.value)}
        placeholder=". . ."
        size="sm"
      />

      <FormLabel mt={5} textAlign="center">
        What needs continued work?
      </FormLabel>
      <Textarea
        onChange={(e) => setContinued(e.target.value)}
        placeholder=". . ."
        size="sm"
      />

      <FormLabel mt={5} textAlign="center">
        Any blockers?
      </FormLabel>
      <Textarea
        onChange={(e) => setBlockers(e.target.value)}
        placeholder=". . ."
        size="sm"
      />

      <NextLink href="/home" passHref>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button m={5} onClick={sendSubmits}>
            Submit
          </Button>
        </Link>
      </NextLink>
    </FormControl>
  );
}
