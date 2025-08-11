import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo.jsx'
import { Todos } from './components/Todos.jsx'
function App() {
  

  return (
   
      <div>
<CreateTodo></CreateTodo>
<Todos></Todos>
  </div>    
  
  )
  
}

export default App
