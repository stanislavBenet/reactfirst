import React, { Component } from "react";
import CiaoList from "../CiaoList/index";

class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
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
      ],
      isDirectionById: true,
      isDirectionByFirstName: true,
    };
  }
  sortUsersByName = () => {
    const { users, isDirectionByFirstName } = this.state;
    const usersCopy = [...users];
    usersCopy.sort((a, b) =>
      isDirectionByFirstName
        ? a.firstName > b.firstName
          ? 1
          : -1
        : a.firstName > b.firstName
        ? -1
        : 1
    );
    this.setState({ users: usersCopy, isDirectionByFirstName: !isDirectionByFirstName });
  };

  sortUsers = () => {
    const { users, isDirectionById } = this.state;
    const usersCopy = [...users];
    usersCopy.sort((curr, next) => (isDirectionById ? curr.id - next.id : next.id - curr.id));
    this.setState({ users: usersCopy, isDirectionById: !isDirectionById });
  };

  render() {
    const { users, isDirectionById, isDirectionByFirstName } = this.state;

    return (
      <>
        <p>
          <button onClick={this.sortUsers}>
            {!isDirectionById ? "По возрастанию" : "По убыванию"}
          </button>
          <button onClick={this.sortUsersByName}>
            {isDirectionByFirstName ? "По алфавиту" : "Против алфавита"}
          </button>
        </p>
        <CiaoList users={users} />
      </>
    );
  }
}

export default CiaoSection;
