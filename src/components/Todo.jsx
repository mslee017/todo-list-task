import React, { useState } from 'react';

const Todo = ({ name, onDelete, id, editTodo, onCompleteTodo, completed }) => {
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
    <li className="todo-item">
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          className="completed-checkbox"
          onChange={() => onCompleteTodo(id)}
          checked={completed}
        />
        {editingTodo ? (
          <input
            type="text"
            onKeyDown={handleExitEditing}
            onChange={event => editTodo(event.target.value, id)}
          />
        ) : (
          <span>{name}</span>
        )}
      </div>
      <div className="icon-wrapper">
        <button onClick={handleEditTodo} className="icon-button">
          ✏️
        </button>

        <button onClick={() => onDelete(id)} className="icon-button">
          🗑️
        </button>
      </div>
    </li>
  );
};

export default Todo;
