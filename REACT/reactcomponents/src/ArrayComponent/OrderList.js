

export function OrderList(){
    let empNames=['Hari','Poonam','Harish','Hitesh','Prachi','Komal'];
    return (
        <ol>
            {
                empNames.map(ele=>{
                    return(<li>{ele}</li>)  /* created, appeded in OL , innerText, textContext, textNode*/
                })
            }
        </ol>
    );
}
export function FilterList(){
    /* display only those employees who are starting with H*/
    let empNames=['Hari','Poonam','Harish','Hitesh','Prachi','Komal'];
    return (
        <ol>
            {
                empNames.filter(ele=>ele.startsWith('H')).map(ele=>{
                    return(<li>{ele}</li>)  /* created, appeded in OL , innerText, textContext, textNode*/
                })
            }
        </ol>
    );
}

