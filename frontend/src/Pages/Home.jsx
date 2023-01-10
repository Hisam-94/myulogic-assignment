import React from "react";
import { Box, Heading, Button, Image } from "@chakra-ui/react";
import { useContext } from "react";
import {AppContex} from "../ContextAPI/AppContext"

const Home = () => {
  const [count,countHandler] = useContext(AppContex)
  return (
    <Box bg="#6b6fbc" p="2rem" h="100vh">
      <a style={{ marginLeft: "80%" }} href="/task2">
        <Button p="1rem 2rem">Task 2</Button>
      </a>
      <Box>
        <Image
          m="auto"
          src="https://en.testometrika.com/upload/uf/066/066f89ecf51a3df5cbb83dcebebe5d7e.svg"
          alt="user-icon"
          w="150px"
        />
        <Heading color="white" mt="2rem" mb="2rem">
          IQ Test for kids from 7 to 16 year old
        </Heading>
        <a href="/task1">
          <Button
            color="white"
            p=".5rem 2rem"
            _hover={{ color: "black" }}
            onClick={countHandler}
            bg="#595c9c"
          >
            Start
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default Home;
