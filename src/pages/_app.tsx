import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { useEffect } from "react";
import { initiateServiceWorkerFromClient } from "../utilities/serviceWorker";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Ensure that application is fully functional before incorporating service worker,
    // otherwise service worker may serve up stale assets.
    initiateServiceWorkerFromClient();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
