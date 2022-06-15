// name of module= name of file (College)


 let deparmentName="CSE";

export let collegName="SGI";

export function getCollege(){
    return collegName;
}
export function changeCollege(colname){
    collegName=colname;
}

export default deparmentName;