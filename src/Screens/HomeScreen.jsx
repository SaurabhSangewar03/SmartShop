import React from "react";
import product from "../product";
import { Flex, Heading, Text } from "@chakra-ui/react";

const HomeScreen = () => {
  return (
    <>
    <Heading textAlign={"center"} mt={4}>Latest Product</Heading>
      <Flex justify={"space-around"} flexWrap={"wrap"} gap={1} p={6}>
        {product.map((product, index) => (
          <Flex key={index} width={"300px"} direction={"column"} align={"center"}>
            <Heading>{product.name}</Heading>
            <Text>{product.description}</Text>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default HomeScreen;
