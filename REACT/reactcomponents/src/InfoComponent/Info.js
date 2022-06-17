// Info.js : Info, Info
//create css file, import it here and apply design
import { Family } from './FamilyComponent/Family';
export function Info(){
    let infoHeading='About Sachin';
    let myStyle={
        padding:"20px",
        fontSize:'20px',
        textTransform:'uppercase'
    }
        return(
            <>
            <section>
                <h3 style={{backgroundColor:"yellow", color:'blue', padding:'20px',border:'2px solid red'}}>{infoHeading}</h3>
                <p style={myStyle}>You’ve heard the chant. You may not have heard of the sport, but you’ve heard the
                     chant. The chant - one that a billion people once lived by; one that would originate from the Wankhede and echo across the city and the seas. It is a name that continues to inspire many, not only in India, but all over the world, to take up the sport. Sachin Ramesh Tendulkar was that cricketer whose personality and aura upstaged any cricketing contest; yet he maintained that he wasn’t greater than than the game. To the people of India, the 5’5” giant of a man was much more than that. He was an emotion;
                     a symbol of hope in a nation that revered him as nothing short of a God.</p>
            </section>
            <Family></Family>
            </>
        );
}

// inline styling : opening tag complex , readabilty decreased, soln: internal styling


