import React from "react"
import { createRoot } from "react-dom/client"

import { TicketsProvider } from "../../aviasales/src/hooks/useTicketsContext.tsx"

import App from "./components/App/App.tsx"

const root = createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <TicketsProvider>
      <App />
    </TicketsProvider>
  </React.StrictMode>
)
