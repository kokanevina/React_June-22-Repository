
export function StudDetails(props){
    return (
        <div>
        <h2>Student Details are:</h2>
        <table border="2">
            <thead>
                <tr><th>ID</th><th>NAME</th><th>STANDARD</th></tr>
            </thead>
            <tbody>
                {
                   props.studArray.map(stud=>{
                    return (<tr key={stud.studId}><td>{stud.studId}</td><td>{stud.studName}</td><td>{stud.studStandard}</td></tr>)
                   }) 
                }
            </tbody>
        </table>
    </div>
    )
}