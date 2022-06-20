
export function TableD(){

  let empArray=[
    {
        eid:456,
        ename:'Hari',
        empSalary:56000
    },
    {
        eid:256,
        ename:'Pari',
        empSalary:46000
    },
    {
        eid:455,
        ename:'Kumar',
        empSalary:58000
    }
  ];

  return (
    <table border="2">
        <tbody>{
            empArray.map(empobj=>{
                return (<tr><td>{empobj.eid}</td><td>{empobj.ename}</td><td>{empobj.empSalary}</td></tr>)
            })
        }
        </tbody>
    </table>
  );
}