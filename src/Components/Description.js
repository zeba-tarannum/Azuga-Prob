import React from "react"
import { useHistory } from "react-router-dom";

export default function Description(props){
    let history = useHistory();
    console.log(history)
    return (<>
    <h2>Content of {history.location.state[0].title} </h2>
    <p>{history.location.state[0].content}</p>
    <button onClick={()=>{history.push("/")}}>Back</button>
    </>
    )
}