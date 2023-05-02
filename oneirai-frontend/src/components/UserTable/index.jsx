import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './UserTable.css'; // import CSS file

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }}
    

    axios.get('http://127.0.0.1:8000/api/admin/getUsers', config)
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Location</th>
          
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.Age}</td>
            <td>{user.location}</td>
          
          </tr>
        ))}
      </tbody>
    </table>
  );
}
      
export default UserTable;
