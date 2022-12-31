import App from "./src/Index"
import * as React from "react"

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  )
}
