import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../App.css';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="card-title" style={{ fontStyle: 'italic', fontWeight: 'bold', color: 'black', textDecoration: 'underline'}}>USER LIST</h1>
      {users.map((user) => (
        <div className="card" style={{ width: "18rem" }} key={user.id}>
          <div className="card-body black">
          <Link className="div1" to={`/users/${user.id}`}>
            <h6  className="card-subtitle mb-2 text-body-secondary ">Name: {user.name}</h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">Username: {user.username}</h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">Email: {user.email}</h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">Phone: {user.phone}</h6>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
}


export default UserList;
