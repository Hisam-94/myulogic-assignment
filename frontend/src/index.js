import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AppContexProviderComponent } from "./ContextAPI/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <AppContexProviderComponent>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContexProviderComponent>
  </ChakraProvider>
);
