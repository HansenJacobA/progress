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
  ALL_TOPICS,
  ALL_POSTS,
  getItem,
  setItem,
} from "../utilities/utilities";

export default function Form() {
  const [topic, setTopic] = useState("");
  const [yesterday, setYesterday] = useState("");
  const [today, setToday] = useState("");
  const [continued, setContinued] = useState("");
  const [blockers, setBlockers] = useState("");
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    const localTopics = getItem(ALL_TOPICS);
    if (localTopics) {
      setAllTopics(localTopics);
    } else {
      setItem(ALL_TOPICS, allTopics);
    }
  }, [false]);

  const sendSubmits = async () => {
    // Handle new topic by submitting new topic
    if (allTopics.find(({ name }) => name === topic) == undefined) {
      const newTopic = {
        id: nanoid(),
        createdAt: new Date().toLocaleString(),
        name: topic,
        complete: false,
        completedAt: null,
      };
      const newAllTopics = [...allTopics, newTopic];
      setItem(ALL_TOPICS, newAllTopics);
    }

    // Submit new entry
    const newEntry = {
      id: nanoid(),
      createdAt: new Date().toLocaleString(),
      topic,
      yesterday,
      today,
      continued,
      blockers,
    };

    const localEntries = getItem(ALL_POSTS);

    if (localEntries) {
      setItem(ALL_POSTS, [...localEntries, newEntry]);
    } else {
      setItem(ALL_POSTS, [newEntry]);
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
