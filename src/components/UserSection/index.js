import React, { Component } from "react";
import UserList from "./UserList";
import SelectedUserList from "./SelectedUserList";

const dbUsers = [
  {
    id: 5,
    firstName: "Brad",
    lastName: "Pitt",
  },
  {
    id: 3,
    firstName: "Tom",
    lastName: "Cruise",
  },
  {
    id: 4,
    firstName: "Lara",
    lastName: "Fara",
  },
  {
    id: 2,
    firstName: "Fata",
    lastName: "Morgana",
  },
  {
    id: 1,
    firstName: "Lux",
    lastName: "Pux",
  },
];

class UserSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: dbUsers.map((user) => ({ ...user, isSelected: false })),
    };
  }


  setUserSelected = (newUsers) => this.setState({ users: newUsers });

  render() {
    const { users } = this.state;
    return (
      <>
        <SelectedUserList users={users} />
        <UserList users={users} setUserSelected={this.setUserSelected} />
      </>
    );
  }
}

export default UserSection;
