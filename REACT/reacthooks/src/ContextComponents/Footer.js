import { useContext } from "react";
import { styleContext } from "./article";
export function Footer(){
    let styleObj=useContext(styleContext);
    return (
        <footer style={styleObj}>
            This is demo of useContext
        </footer>
    );
}