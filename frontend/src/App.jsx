import { useState, useEffect } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo.jsx'
import { Todos } from './components/Todos.jsx'

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch(err => console.error("Error fetching todos:", err));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <CreateTodo onAdd={fetchTodos} />
      <Todos todos={todos} onUpdate={fetchTodos} />
    </div>
  );
}

export default App;
