import { useContext } from "react";
import { context1 } from "./article";

export function List(){
    let songTypes=useContext(context1);
    return (
        <ul>
            <li>{songTypes.type1}</li>
            <li>{songTypes.type2}</li>
            <li>{songTypes.type3}</li>
        </ul>
    );
}