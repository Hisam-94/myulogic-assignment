import React, { useContext } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { AppContex } from "../ContextAPI/AppContext";

const Result = ({ correctAnsCount }) => {
  const con = useContext(AppContex);
  return (
    <Box textAlign="start" w="79%" m="auto" p="1rem" mt="5rem" color="#6f6976">
      <Heading color="#6f6976">Your result:</Heading>
      <Text mt="1rem" fontSize="2xl">
        Test Time: {"00:01:50"}, average user {"00:03:14"}
      </Text>
      <Text mt="1rem" fontSize="2xl">
        <Text as="b">Your IQ is {"110"}.</Text> This corresponds to a{" "}
        {"below average "} level IQ, In this test you have{" "}
        <Text as="b">{correctAnsCount} correct</Text>
      </Text>
      <Text fontSize="2xl">
        <Text as="b">answers from {5}.</Text> This is {"very good"} result for
        your age {"11"}.
      </Text>
    </Box>
  );
};

export default Result;
