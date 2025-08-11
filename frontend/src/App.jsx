import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo.jsx'
import { Todos } from './components/Todos.jsx'
function App() {
  
const [todos , setTodos] = useState([]);
fetch("htt[//localhost:3000/todos")
.then(async function(){
  const json = await resizeBy.json();
setTodos(json.todos)
})
  return (
   
      <div>
<CreateTodo></CreateTodo>
<Todos todos={[
  {
  title: "asd",
  description: "asdef des" , 
  completed : false
  }
]} ></Todos>
  </div>    
  
  )
  
}

export default App
