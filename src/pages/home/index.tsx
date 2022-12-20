import Template from "../../components/template";
import Welcome from "../../components/welcome";
import { Flex } from "@chakra-ui/react";
import Greeting from "../../components/greeting";

export default function Home() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      <Greeting />
      <Welcome />
    </Flex>
  );
}
