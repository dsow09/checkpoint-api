import axios from "axios";
import React, { useState } from "react";

const UserList = () => {
    const [data, setData] = useState([]);// where to store the returned data
    const [error, setError] = useState(null);// where to store the coming errors

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
    setData(response.data);
    })
    .catch(function(error) {
    setError(error);
    })
    
    return (
        <>
            <div className="alert alert-success m-2" role="alert">
                <h1>Liste des utilisateurs !</h1>
            </div>
            <table className="table table-bordered">
                <thead>
                <tr className="table-active table-primary">
                    <th scope="col">Nom</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Téléphone</th>
                    <th scope="col">Adresse</th>
                </tr>
                </thead>
            {data.map(user => (
                    <tbody key={user.id}>
                    <tr>
                        <th scope="row">{user.name}</th>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.address.street}</td>
                    </tr>
                    </tbody>
            ))}
            </table>
            {error ? error : false}
        </>
    )
}

export default UserList;