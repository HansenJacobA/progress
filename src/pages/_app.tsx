import Script from "next/script";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* <Script src="/sw-register.js" /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
