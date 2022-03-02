import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Social from "./components/Social";
import Profile from "./components/Profile";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <div className="App">
      <VStack p="5">
        <Flex w="100%">
          <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
            johnDoe
          </Heading>
          <Spacer></Spacer>
          <IconButton
            aria-label="linkedin-icon"
            icon={<FaLinkedin />}
            isRound={true}
          ></IconButton>
          <IconButton
            ml="2"
            aria-label="instagram-icon"
            icon={<FaInstagram />}
            isRound={true}
          ></IconButton>
          <IconButton
            ml="2"
            aria-label="github-icon"
            icon={<FaGithub />}
            isRound={true}
          ></IconButton>
          <IconButton
            ml="8"
            aria-label="mode-icon"
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound={true}
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
        <Header />
        <Social />
        <Profile />
      </VStack>
    </div>
  );
}

export default App;
