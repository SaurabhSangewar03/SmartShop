import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import SmartShop from "./SmartShop";


const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Montserrat, sans-serif",
  },
});

function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <SmartShop />
      </ChakraProvider>
    </div>
  );
}

export default App;
