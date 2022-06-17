
import { Flower } from "./FlowerComponent/Flower";

export function Section(){
    return (
        <>
        <h2>Flower Info</h2>
        <section> 
            <Flower flowerSource="https://th.bing.com/th/id/OIP.nw6n7-8AVKp7C4C4_L6e0gHaEs?pid=ImgDet&rs=1" flowerName="Lotus Flower" flowerInfo="https://realitycrazy.com/lotus-flowers-a-beautiful-addition-to-your-garden-pond/" shortDesc="  A lotus flower may be efficaciously grown in “tubs” in or around your 
            pond. Large boxes will include paintings as well. 
            Just be sure to hold them wet, and by using wet, the 
            experts suggest VERY moistly. "></Flower>
            <Flower flowerSource="https://th.bing.com/th/id/OIP.nw6n7-8AVKp7C4C4_L6e0gHaEs?pid=ImgDet&rs=1" flowerName="Rose Flower" flowerInfo="https://realitycrazy.com/lotus-flowers-a-beautiful-addition-to-your-garden-pond/"></Flower>
            <Flower flowerSource="https://th.bing.com/th/id/OIP.nw6n7-8AVKp7C4C4_L6e0gHaEs?pid=ImgDet&rs=1" flowerName="SunFlower Flower" flowerInfo="https://realitycrazy.com/lotus-flowers-a-beautiful-addition-to-your-garden-pond/"></Flower>
        </section>
        </>
    );
}