

export function Flower(props){
    let flower = "Lotus";
    let img_name = "Lotus Flower"
    let altMessage ="lotus image"
    return (
     
        <article>
            <figure>
                <img src={props.flowerSource} alt={props.flowerName} height="200" width="200"></img>
                <figcaption>{props.flowerName}</figcaption>
            </figure>
            <p>
                {props.shortDesc}
            </p>
            <p>
                <a href={props.flowerInfo}>More Info about {props.flowerName}</a>
            </p>
        </article>
  
    );
  }
  