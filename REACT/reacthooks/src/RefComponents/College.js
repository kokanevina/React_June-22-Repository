import { useRef } from "react";



export function College(){
        let college="";  // as value is not in useState, we can not update on web page
       let inputNode=useRef(null);
        let taNode=useRef(null);
        let bNode=useRef("");
       let getCollege=function(){
          college=inputNode.current.value;
           taNode.current.value=inputNode.current.value;
           bNode.current.innerHTML =inputNode.current.value;
    }

    return(
        <div>
            <label>Enter colleg Name:</label>
            <input type="text" ref={inputNode}></input>
            <button onClick={getCollege}>GET</button>
            <textarea ref={taNode}>
            </textarea>
            <b ref={bNode}>{college}</b> {/* not getting updated */}
        </div>
    );


}