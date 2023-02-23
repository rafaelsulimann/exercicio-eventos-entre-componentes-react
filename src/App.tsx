import { useState } from "react";
import Child from "./components/Child";
import Parent from "./components/Parent";

export default function App() {

  return (
    <main className="app">
      <section className="parent-section">
        <Parent />
      </section>
    </main>
  )
}

