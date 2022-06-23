import { useContext } from "react";
import { styleContext, context2} from "./article";
export function Footer(){
let styleObj=useContext(styleContext);
let singerName=useContext(context2);
    return (
        <footer style={styleObj}>
            <h2>{singerName}</h2>
            This is demo of useContext
        </footer>
    );
}