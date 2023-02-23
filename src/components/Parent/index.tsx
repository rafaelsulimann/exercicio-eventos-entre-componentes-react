import { MouseEventHandler, useState } from "react";
import Child from "../Child";

export default function Parent() {

    const [triple, setTriple] = useState(0);

    function handleNewValue(newValue : number) {
        setTriple(newValue * 3);
    }

    return(
        <div className="container parent-container" style={{border: "1px solid red", padding: "10px"}}>
            <div className="parent">
                <p>{triple}</p>
                <Child onNewValue={handleNewValue} />
            </div>
        </div>
    );
}