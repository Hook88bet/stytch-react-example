import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { StytchProvider } from "@stytch/react";
import { StytchUIClient } from "@stytch/vanilla-js";

const STYTCH_PUBLIC_TOKEN = process.env.REACT_APP_STYTCH_PUBLIC_TOKEN;

const stytch = new StytchUIClient(STYTCH_PUBLIC_TOKEN);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StytchProvider stytch={stytch}>
      <App />
    </StytchProvider>
    ,
  </React.StrictMode>
);
