import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onDeleteTodo, editTodo, onCompleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <Todo
          {...todo}
          key={todo.id}
          onDelete={onDeleteTodo}
          editTodo={editTodo}
          onCompleteTodo={onCompleteTodo}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
