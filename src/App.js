import React, { Component } from 'react';
import UsersList from './UsersList'
import './App.css';

const allUsers = ["Michał", "Aga", "Patryk", "Ania", "Laura"];

class App extends Component {
  constructor() {
      super();
      this.state = {
        filteredUsers: allUsers
      }
  }

    getFilteredUsersForText(text) {
        return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
    }


    filterUsers = (e) => {
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text);
      this.setState({
          filteredUsers
      })
  };


  render() {
    return (
      <div className="App">
        <input onInput={this.filterUsers} />
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }
}

export default App;
