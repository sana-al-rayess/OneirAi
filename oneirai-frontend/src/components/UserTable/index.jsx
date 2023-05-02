import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './UserTable.css'; // import CSS file

function UserTable() {


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
