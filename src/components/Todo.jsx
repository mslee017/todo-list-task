import React, { useState } from 'react';

const Todo = ({ name, onDelete, id, editTodo }) => {
  const [editingTodo, setEditingTodo] = useState(false);

  const handleEditTodo = () => {
    setEditingTodo(true);
  };

  const handleExitEditing = event => {
    if (event.key === 'Enter') {
      setEditingTodo(false);
    }
  };

  return (
    <div className="todo-container">
      <input type="checkbox" className="completed-checkbox" />
      {editingTodo ? (
        <input
          type="text"
          onKeyDown={handleExitEditing}
          onChange={event => editTodo(event.target.value, id)}
        />
      ) : (
        <span>{name}</span>
      )}
      <span className="edit-todo" onClick={handleEditTodo}>
        Pencil
      </span>
      {/* Mention to Abhishek: this onClick only works with arrow function. Why is this? */}
      <span className="delete-todo" onClick={() => onDelete(id)}>
        Trash Can
      </span>
    </div>
  );
};

export default Todo;
