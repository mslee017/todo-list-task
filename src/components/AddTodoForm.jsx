import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [name, setName] = useState('');
  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!name.trim()) return;
    addTodo(name);
    setName('');
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <h1>My Todo List</h1>
      <input
        type="text"
        className="enter-todo-input"
        onChange={handleChange}
        value={name}
        placeholder="Enter Task"
      />
    </form>
  );
};

export default AddTodoForm;
