//normal/annonymoys/arrow
let inputNode1=document.getElementById('num1');
console.log(inputNode1);
console.log(inputNode1.type);
let inputNode2=document.getElementById('num2');
let boldNode=document.getElementById('result');

function addNums(){
        let no1=inputNode1.value;
        let no2=inputNode2.value;
        let result=parseFloat(no1)+parseFloat(no2);
        //1. innerText/innerHTML
        //boldNode.innerText="<i>"+result+"</i>";
        // innerText: always considers text as plaintext
        //boldNode.innerHTML="<i>"+result+"</i>";
        // innerHTML: considers inner HTML element as html so effect is applied

        //2. creating Textnode as child of i node, i node child of b node
        let iNode=document.createElement("i");
        let textNode=document.createTextNode(result);
        iNode.append(textNode);
        boldNode.innerHTML="";
        boldNode.append(iNode);
}


        //Declare array of cities display all cities in ordered list
        // ol should be created using DOM methods/properties
        //ol should be added as a child of body
        // document.body is shortcut way to access body element
        let array=['Mumbai','Satara','Delhi','Solapur','Kolhapur','Pune'];
        let olNode=document.createElement('ol');
        olNode.type="A";  // type: built in attribute of ol
        let tp=olNode.type;
        console.log(tp);
        olNode.setAttribute('class','myList');
        for(let element of array){
           let liNode=document.createElement('li'); 
           liNode.innerText=element;
            olNode.append(liNode);   // appends the element as last child of parent
        }
// document.body.append(olNode);
let sectionNode=document.getElementById('block1'); // put this id to sibling
sectionNode.after(olNode);  // before  after works with sibling // parentNode.insertBefore(newnode,oldnode)

let inputNodes=document.getElementsByTagName('input');
function applyStyle(event){
   /*  for(let el of inputNodes){
        el.style.backgroundColor='blue'
    } */
   let sourceNode= event.target;  // target: source of the event
   console.log(sourceNode);
   sourceNode.style.backgroundColor='blue';
}
let checkNodes=document.getElementsByName('course');
for(let node of checkNodes){
    node.style.outline='3px solid green';
    node.style.height="20px"
    node.style.width="20px"
}
let courseArray=[];
function collect(){
    courseArray=[];
    for(let node of checkNodes){
       if(node.checked){
        courseArray.push(node.value);
       }
    }
    console.log(courseArray);
}
//Create password field and a check box with label show password
//if u check checkbox then password should be visible, else invisible