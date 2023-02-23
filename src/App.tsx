import { useState } from "react";
import Parent from "./components/Parent";

export default function App() {

  const [count, setCount] = useState<number>(0);

  function handleNewCountValue(newCountValue : number) {
    setCount(newCountValue);
  }

  return (
    <main className="app">
      <section className="container parent-section" style={{ border: "1px solid red", padding: "10px" , marginTop: "20px"}}>
        <Parent count={count} onNewCountValue={handleNewCountValue} />
      </section>
    </main>
  )
}

