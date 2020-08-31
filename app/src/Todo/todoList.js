import React from "react";
import PropTypes from "prop-types";
import "../variables.scss";

// Components
import TodoItem from "./TodoItem";
//-----------------

const styles = {
  ul: {
    backgroundColor: "$background_color",
    color: "$text_color",
    margin: "0 0 0 2%",
    width: "20%",
    maxWidth: "auto",
    fontSize: "1rem",
  },
};

function TodoList(props) {
  return (
    <ul className="list" style={styles.ul}>
      {props.todos.map((todo, index) => {
        return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>;
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
