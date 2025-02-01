import React, { useState } from "react";

function TodoInput({ addTodos }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    addTodos(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new to-do"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Add To-Do</button>
    </form>
  );
}

export default TodoInput;
