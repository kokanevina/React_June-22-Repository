import { createContext,useState, useEffect} from "react";
import { Footer } from "./footer";
import { Section } from "./section";

export let context1=createContext();
export let styleContext=createContext();
export let context2=createContext();
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
    let [singer, setName]=useState('');
    let [songs, setValue]=useState(0);
    useEffect(()=>{
        window.alert("Name Changed");
        document.title="React Hooks";
    },[singer]);
    return (
        <article>
            <h1>{singer}</h1>
            <label>Enter Name:</label>
            <input type="text"value={singer} onChange={(e)=>setName(e.target.value)}></input>
            <label>Enter number of songs sung</label>
            <input type="number" value={songs} onChange={(e)=>setValue(e.target.value)}></input>
            <context1.Provider value={songObject}>
                    <Section></Section>
            </context1.Provider>
            <styleContext.Provider value={myStyle}>
                <context2.Provider value={singer}>
                  <Footer></Footer>
                </context2.Provider>
            </styleContext.Provider> 
        </article>
    );
}