import { Flex, Text } from "@chakra-ui/react";
import { Template } from "../../components";

export default function PrivatePolicy() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      <Flex w={300} justify="center" align="center" direction="column" gap={5}>
        <Text as="h2" fontSize={24}>
          Private Policy
        </Text>
        <Text>
          No user data is shared or collected by this application with anyone or
          anything except for the user and the used device while using the
          application. This application stores and retrieves data on the users
          device using local storage.
        </Text>
        <Text>
          The user may delete locally stored data at any time within the
          application.
        </Text>
      </Flex>
    </Flex>
  );
}
