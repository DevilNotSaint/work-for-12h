import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

import "../App.scss";
import "../variables.scss";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "2px solid #8c8a84",
    borderRadius: "5px",
    color: "$text_color",
    margin: "0 0 .5rem 0",
    textAlign: "left",
    width: "100%",
    maxWidth: "auto",
    fontSize: "1.2rem",
  },
  itemCheckbox: {
    display: "flex",
  },
  span: {
    fontWeight: "bold",
    padding: "0 0 0 50%",
  },
  button: {
    padding: "0",
    margin: "0",
    cursor: "pointer",
  },
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodoItem } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li className="list-item" style={styles.li}>
      <div className="itemCheckbox" style={styles.itemCheckbox}>
        <input
          type="checkbox"
          onChange={() => onChange(todo.id)}
          checked={todo.completed}
        />
        <span style={styles.span}>{index + 1}</span>
      </div>
      <p className={classes.join(" ")}>{todo.title}</p>
      <button style={styles.button} onClick={removeTodoItem.bind(null, todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
