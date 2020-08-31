import React from "react";
import "./nullification.css";
import "./App.scss";
import TodoList from "./Todo/todoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
  let [todos, setTodos] = React.useState([
    { id: 1, completed: true, title: "Introduce" },
    { id: 2, completed: false, title: "My Works" },
    { id: 3, completed: false, title: "Job - Job" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodoItem(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false,
    }]))
  }

  return (
    <Context.Provider value={{ removeTodoItem }}>
      <div className="wrapper d-flex">
        <h1>Hello</h1>

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>All Complited!</p>
        )}
        <AddTodo onCreate={addTodo}/>
      </div>
    </Context.Provider>
  );
}

export default App;
