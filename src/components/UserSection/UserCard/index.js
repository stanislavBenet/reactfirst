import React from "react";
import { PropTypes } from "prop-types";
function UserCard(props) {
  const btnHandler = () => {
    const {
      user: { id },
      userSelect,
    } = props;
    userSelect(id);
  };

  const {
    user: { id, firstName, isSelected },
  } = props;
  const styles = { backgroundColor: isSelected ? "pink" : undefined };
  return (
    <article key={id} style={styles}>
      <h3>
        <span>{id}:</span>
        {firstName}
      </h3>
      <button onClick={btnHandler}>Select person</button>
    </article>
  );
}

UserCard.defaultProps = {
  user: { id: null, firstName: "noname", lastName: "noname", isSelected: true },
  userSelect: () => {},
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
  }).isRequired,
  userSelect: PropTypes.func,
};

export default UserCard;
