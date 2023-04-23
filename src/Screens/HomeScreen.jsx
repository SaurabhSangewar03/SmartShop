import React from "react";
import product from "../product";
import { Flex, Heading, } from "@chakra-ui/react";
import Products from "../Components/Product/Products";

const HomeScreen = () => {
  return (
    <>
    <Heading textAlign={"center"} mt={4}>Latest Product</Heading>
      <Flex justify={"space-around"} flexWrap={"wrap"} gap={1} p={6}>
        {product.map((product, index) => (
          <Products product={product}/>
        ))}
      </Flex>
    </>
  );
};

export default HomeScreen;
