import { MouseEventHandler, useState } from "react";

type Props = {
  count : number,
  onNewClick: Function;
};

export default function Child({count, onNewClick}: Props) {

  function handleAddClick(){
    const newValue = count + 1;
    onNewClick(newValue);
  }

  function setCountToZero(){
    count = 0;
    onNewClick(count);
  }
  
  return (
    <div className="child" style={{ border: "1px solid red", padding: "10px" }}>
      <p>{count}</p>
      <button onClick={handleAddClick}>ADD</button>
      <button onClick={setCountToZero}>Limpar</button>
    </div>
  );
}
