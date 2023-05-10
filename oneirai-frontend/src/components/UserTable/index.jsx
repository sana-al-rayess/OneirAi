import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserTable.css';
import ReactPaginate from 'react-paginate';

function UserTable() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage] = useState(8);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };

    axios
      .get('http://127.0.0.1:8000/api/admin/getUsers', config)
      .then((response) => {
        setUsers(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const pageCount = Math.ceil(users.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayUsers = users
    .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
    .map((user) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.Age}</td>
        <td>{user.location}</td>
      </tr>
    ));

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
      ) : (
        <>
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>{displayUsers}</tbody>
          </table>

          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'pagination'}
            previousLinkClassName={'previous-page'}
            nextLinkClassName={'next-page'}
            disabledClassName={'disabled'}
            activeClassName={'active'}
          />
        </>
      )}
    </>
  );
}

export default UserTable;

