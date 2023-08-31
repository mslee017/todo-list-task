import { useState } from 'react';
import TodoList from './components/TodoList';
import { initialTodos } from './todos';
import './App.css';

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [enterTodo, setEnterTodo] = useState('');

  const handleChange = event => {
    setEnterTodo(event.target.value);
  };

  const addTodo = event => {
    event.preventDefault();
    setTodos([
      { id: crypto.randomUUID(), name: enterTodo, completed: false },
      ...todos,
    ]);
    setEnterTodo('');
  };

  const handleEditingTodo = (name, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.name = name;
        }
        return todo;
      })
    );
  };

  return (
    <div className="wrapper">
      <form action="#" onSubmit={addTodo}>
        <h1>My Todo List</h1>
        <input
          type="text"
          className="enter-todo-input"
          onChange={handleChange}
          value={enterTodo}
          placeholder="Enter Task"
        ></input>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          editTodo={handleEditingTodo}
        />
      </form>
    </div>
  );
}

export default App;
