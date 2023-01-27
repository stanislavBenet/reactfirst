import React, { Component } from "react";
import CiaoList from "./CiaoList";
import CiaoSorted from "./CiaoSorted";

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
  // sortUsersByName = () => {
  //   const { users, isDirectionByFirstName } = this.state;
  //   const usersCopy = [...users];
  //   usersCopy.sort((a, b) =>
  //     isDirectionByFirstName
  //       ? a.firstName > b.firstName
  //         ? 1
  //         : -1
  //       : a.firstName > b.firstName
  //       ? -1
  //       : 1
  //   );
  //   this.setState({ users: usersCopy, isDirectionByFirstName: !isDirectionByFirstName });
  // };

  setSortUsersByName = (isDirectionByFirstName, usersCopy) =>
    this.setState({ users: usersCopy, isDirectionByFirstName: !isDirectionByFirstName });

  // sortUsers = () => {
  //   const { users, isDirectionById } = this.state;
  //   const usersCopy = [...users];
  //   usersCopy.sort((curr, next) => (isDirectionById ? curr.id - next.id : next.id - curr.id));
  //   this.setState({ users: usersCopy, isDirectionById: !isDirectionById });
  // };

  setSortUsersById = (isDirectionById, usersCopy) =>
    this.setState({ users: usersCopy, isDirectionById: !isDirectionById });

  render() {
    const { users, isDirectionById, isDirectionByFirstName } = this.state;

    return (
      <>
        <CiaoSorted
          users={users}
          isDirectionById={isDirectionById}
          isDirectionByFirstName={isDirectionByFirstName}
          setSortUsersById={this.setSortUsersById}
          setSortUsersByName={this.setSortUsersByName}
        />
        <CiaoList users={users} />
      </>
    );
  }
}

export default CiaoSection;
