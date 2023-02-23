import Child from "../Child";

type Props = {
    count : number,
    onNewCountValue : Function,
}

export default function Parent({count, onNewCountValue} : Props) {
    
    function handleNewClick(newValue : number) {
        onNewCountValue(newValue);
    }
    
    function setTripleValue(countNumber : number) : number{
        return countNumber * 3;
    }

    return(
        <div className="container parent-container" style={{border: "1px solid red", padding: "10px"}}>
            <div className="parent">
                <p>{setTripleValue(count)}</p>
                <Child count={count} onNewClick={handleNewClick}/>
            </div>
        </div>
    );
}