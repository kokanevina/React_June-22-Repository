import { createContext } from "react";
import { Footer } from "./Footer";
import { Section } from "./section";

export let context1=createContext();
export let styleContext=createContext();

export function Article(){
    let songObject={
        'type1':'Marathi songs',
        'type2':'Hindi songs',
        'type3':'Tamil songs'
    }
    let myStyle={
        color:'red',
        border: '2px solid red'
    }
    return (
        <article>
            <h1>Lata Mangeshkar</h1>
            <context1.Provider value={songObject}>
                    <Section></Section>
            </context1.Provider>
               <styleContext.Provider value={myStyle}>
               <Footer></Footer>
               </styleContext.Provider>
              
         
        </article>
    );
}