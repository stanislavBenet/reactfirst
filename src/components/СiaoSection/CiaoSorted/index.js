import React, { Component } from "react";

class CiaoSorted extends Component {
  sortUsersById = () => {
    const { users, isDirectionById, setSortUsersById } = this.props;
    const usersCopy = [...users];
    usersCopy.sort((curr, next) => (isDirectionById ? curr.id - next.id : next.id - curr.id));
    setSortUsersById(isDirectionById, usersCopy);
  };

  sortUsersByName = () => {
    const { users, isDirectionByFirstName, setSortUsersByName } = this.props;
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
    setSortUsersByName(isDirectionByFirstName, usersCopy);
  };
  render() {
    const { isDirectionByFirstName, isDirectionById } = this.props;
    return (
      <>
        <p>
          <button onClick={this.sortUsersById}>
            {!isDirectionById ? "По возрастанию" : "По убыванию"}
          </button>
          <button onClick={this.sortUsersByName}>
            {isDirectionByFirstName ? "По алфавиту" : "Против алфавита"}
          </button>
        </p>
      </>
    );
  }
}

export default CiaoSorted;
