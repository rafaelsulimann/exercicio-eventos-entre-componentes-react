import { MouseEventHandler, useState } from "react";

type Props = {
  onNewValue: Function;
};

export default function Child({ onNewValue}: Props) {
  const [count, setCount] = useState(0);

  function handleAddClick() {
    const newCount = count + 1;
    setCount(newCount);
    onNewValue(newCount);
  }

  function setCountToZero() {
    setCount(0);
  }

  return (
    <div className="child" style={{ border: "1px solid red", padding: "10px" }}>
      <p>{count}</p>
      <button onClick={handleAddClick}>ADD</button>
    </div>
  );
}
