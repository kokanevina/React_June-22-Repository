let sectionNode1=document.getElementById('sachin');
let nodes=document.getElementsByClassName('india');
//instead of adding 'onclick' attribute in html element we can register event like below
document.getElementById('copybutton').addEventListener('click',()=>copyPaste());
let copyPaste=function(){
    for(let node of nodes){
        node.innerHTML=sectionNode1.innerHTML;
    }
}
// setInterval, setTimeout
let shopItems=['Kurti','Top','Jeans','Leggings'];
let i=0;
let interval1=setInterval(()=>{
    if(i>=shopItems.length)
        i=0;
    document.getElementById('item1').innerText=shopItems[i];
    i++;
},3000);
j=0
let interval2=setInterval(()=>{
    if(j>=shopItems.length)
        clearInterval(interval2);
    else{
        document.getElementById('item2').innerText=shopItems[j];
        j++;
    }
},3000);
k=0;
setTimeout(()=>{
        document.getElementById('item3').innerText=shopItems[k];
        k++;
},3000);