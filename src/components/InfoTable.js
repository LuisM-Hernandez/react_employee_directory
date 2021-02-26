const InfoTable = (props) => {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map((user, uid) => <tr key={uid}>
                    <img src={user.picture.medium} alt={user.name.first}/>
                    <td>{user.name.first} {user.name.last}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.dob.date}</td>
                </tr>)}
            </tbody>
        </table>
    );
}

export default InfoTable;

