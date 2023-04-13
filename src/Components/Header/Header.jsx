import React, { useState } from "react";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
  Icon,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

const Links = ["Home", "About", "Services", "Contact"];

function NavLink({ children, href }) {
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={href}
    >
      {children}
    </Link>
  );
}

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [navbarLinks, setNavbarLinks] = useState(Links);
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={6}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        /> */}
        <HStack spacing={8} alignItems={"center"}>
          <Box>My Logo</Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {navbarLinks.map((link) => (
              <NavLink key={link} href={`/${link.toLowerCase()}`}>
                {link}
              </NavLink>
            ))}
          </HStack>
        </HStack>

        <HStack spacing='24px'>
          <Box display={"flex"} alignItems={"center"} cursor={"pointer"}>
            <Icon as={FaShoppingCart} boxSize={4} />
            <Text ml={2}>Cart</Text>
          </Box>
          <Box display={"flex"} alignItems={"center"} cursor={"pointer"}>
          <Icon as={FaUserAlt} boxSize={4} />
            <Text ml={2}>Sign In</Text>
          </Box>
        </HStack>

        <Flex alignItems={"center"} display={{md: "none"}}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant={"ghost"}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} >
          <Stack as={"nav"} spacing={4}>
            {navbarLinks.map((link) => (
              <NavLink key={link} href={`/${link.toLowerCase()}`}>
                {link}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
