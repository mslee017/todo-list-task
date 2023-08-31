import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, editTodo }) => {
  const deleteTodo = id => {
    const filteredTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(filteredTodos);
  };

  return (
    <div>
      {todos.map(todo => (
        <Todo
          {...todo}
          key={todo.id}
          onDelete={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
