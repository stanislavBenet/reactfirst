import React from "react";
import { PropTypes } from "prop-types";
import UserCard from "../UserCard";

function UserList(props) {
  const userSelect = (id) => {
    const { users, setUserSelected } = props;
    const newUsers = users.map((user) => ({
      ...user,
      isSelected: user.id === id ? !user.isSelected : user.isSelected,
    }));
    setUserSelected(newUsers);
  };
  const mapUsers = (user) => <UserCard key={user.id} user={user} userSelect={userSelect} />;

  const { users } = props;
  return (
    <section>
      <h2>Users list</h2>
      {users.map(mapUsers)}
    </section>
  );
}
UserList.defaultProps = {
  users: [],
  setUserSelected: () => {},
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      isSelected: PropTypes.bool,
    })
  ).isRequired,
  setUserSelected: PropTypes.func,
};
export default UserList;
