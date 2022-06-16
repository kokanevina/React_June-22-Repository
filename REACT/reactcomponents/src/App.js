import React from 'react';
import './App.css';
import {Info} from './InfoComponent/Info';
function App(){
  let cricker="Sachin Tendulkarrrrr";
  let altMessage="sachin";
  return (
    <React.Fragment>
      <article>
      <section>
        <h2 className="Myheading">{cricker}</h2>
        <figure>
          <img className="MyImage" src="https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2019/05/30/sachin.jpg?itok=HQ6hzHL8" alt={altMessage} />
          <figcaption>Sachin Tendulkar</figcaption>
        </figure>
      </section>
      <Info></Info>
      </article>

    </React.Fragment>
  );
}

export default App;