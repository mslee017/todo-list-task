import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { initialTodos } from './todos';
import './App.css';

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = name => {
    setTodos([{ id: crypto.randomUUID(), name, completed: false }, ...todos]);
  };

  console.log(todos);
  const handleDeleteTodo = id => {
    const filteredTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(filteredTodos);
  };

  const handleEditingTodo = (name, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            name: todo.name,
          };
        }
        return todo;
      })
    );
  };

  const handleCompleteTodo = id => {
    //
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="wrapper">
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        editTodo={handleEditingTodo}
        onDeleteTodo={handleDeleteTodo}
        onCompleteTodo={handleCompleteTodo}
      />
    </div>
  );
}

export default App;
