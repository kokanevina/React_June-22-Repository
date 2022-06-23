import { useRef } from "react";



export function College(){
       let inputNode=useRef(null);
        let taNode=useRef(null);
        let bNode=useRef(null);
    let getCollege=function(){
            console.log(inputNode.current.value);
        taNode.current.value=inputNode.current.value;
        bNode.current.text=inputNode.current.value;
    }

    return(
        <div>
            <label>Enter colleg Name:</label>
            <input type="text" ref={inputNode}></input>
            <button onClick={getCollege}>GET</button>
            <textarea ref={taNode}>
            </textarea>
            <b ref={bNode}></b>
        </div>
    );


}