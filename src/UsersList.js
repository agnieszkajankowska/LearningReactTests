import React, { Component } from 'react';


const UsersList = ({users}) => {
  return (
      users.length > 0 ?
      <ul>
          {users.map(user => <li key={user}>{user}</li>)}
      </ul> : <p>No results!</p>
  )
};

export default UsersList;