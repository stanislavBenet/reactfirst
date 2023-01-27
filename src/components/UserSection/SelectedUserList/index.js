import React, { Component } from "react";

class SelectedUserList extends Component {
  render() {
    const { users } = this.props;
    const selectUser = users.filter((user) => user.isSelected);
    return (
      <header>
        <ul>
          {selectUser.map(({ id, firstName }) => (
            <li key={id}>{firstName}</li>
          ))}
        </ul>
      </header>
    );
  }
}

export default SelectedUserList;
