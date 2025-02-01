import React, { useState } from "react";
import TodoInput from "./TodoInput";

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoInput addTodos={addTodos} /> {}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
