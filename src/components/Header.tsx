import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Text,
  useColorMode,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";

const Header: FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <VStack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        minWidth="300px"
        minHeight="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        p={isNotSmallerScreen ? "32" : 0}
        alignSelf="flex-start"
      >
        <Box>
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            John Doe
          </Text>
          <Text color={isDark ? "gray 200" : "gray:500"}>
            GDE - Flutter, Firebase. Founder of https://google.com &
            https://facebook.com. Building @frontierdotxyz, YouTuber &
            Entrepreneur 🗣
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => window.open("https://google.com")}
          >
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://avatars.githubusercontent.com/u/72048640?v=4"
        />
      </Flex>
    </VStack>
  );
};

export default Header;
