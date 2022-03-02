import { HStack, Icon, useMediaQuery } from "@chakra-ui/react";
import React, { FC } from "react";
import { FaFacebook, FaGoogle, FaSpotify, FaShopify } from "react-icons/fa";

const Social: FC = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <HStack spacing="24">
      <Icon ml={isNotSmallerScreen ? 4 : 0} as={FaFacebook} boxSize="50" />
      <Icon ml={isNotSmallerScreen ? 4 : 0} as={FaGoogle} boxSize="50" />
      <Icon ml={isNotSmallerScreen ? 4 : 0} as={FaSpotify} boxSize="50" />
      <Icon ml={isNotSmallerScreen ? 4 : 0} as={FaShopify} boxSize="50" />
    </HStack>
  );
};

export default Social;
