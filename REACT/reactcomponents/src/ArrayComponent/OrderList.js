import 'bootstrap/dist/css/bootstrap.min.css';

export function OrderList(){
    let empNames=['Hari','Poonam','Harish','Hitesh','Prachi','Komal','Hari'];
    return (
        <ol className='bg-success'>
            {
                empNames.map((ele,index)=>{
                    return(<li key={index}>{ele}</li>)  /* created, appeded in OL , innerText, textContext, textNode*/
                })
            }
        </ol>
    );
}
export function FilterList(){
    /* display only those employees who are starting with H*/
    let empNames=['Hari','Poonam','Harish','Hitesh','Prachi','Komal'];
    return (
        <ol className='bg-info'>
            {
                empNames.filter(ele=>ele.startsWith('H')).map((ele,index)=>{
                    return(<li key={index}>{ele}</li>)  /* created, appeded in OL , innerText, textContext, textNode*/
                })
            }
        </ol>
    );
}

