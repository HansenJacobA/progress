import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Greeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const timeNow = new Date().toLocaleTimeString().split(" ");
    const amPm = timeNow.pop();
    const hour = parseInt(timeNow.shift());
    setGreeting(
      amPm === "AM"
        ? "Good morning,"
        : hour < 5 || hour === 12
        ? "Good afternoon,"
        : "Good evening,"
    );
  }, []);

  return (
    <Flex align="center" justify="center">
      <Heading
        as="h2"
        size="lg"
        noOfLines={1}
        textAlign="center"
        fontWeight="light"
      >
        {greeting}
      </Heading>
    </Flex>
  );
}
