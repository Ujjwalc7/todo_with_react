import { useEffect, useState } from 'react'
import { TodoProvider, useTodo} from "./context/index"
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>{
    setTodos((prev) => [...prev, {
      id: Date.now(),
      ...todo
    }])
  }
  const updateTodo = (id, object) =>{
    setTodos((prev)=> prev.map((todo)=>todo.id===id ? object: todo))
  }

  const deleteTodo = (id) =>{
    setTodos((prev)=> prev.filter((item)=>item.id !== id))
  }

  const toggleComplete = (id) =>{
    // console.log(id);
    setTodos((prev)=> prev.map((item)=>item.id===id ? {...item, completed: !item.completed}
     : item))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
      console.log(todos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className=' grid  w-full justify-center pt-[100px]
       bg-blue-950 h-[100vh]'>
        <div className=' w-[700px]'>
          <h1 className=' text-center font-bold text-3xl
           mb-10 text-yellow-100 tracking-wider'>Manage your todos</h1>
          <div>
            {/* // todo form goes here */}
            <TodoForm/>
          </div>
          <div>
            {/* todo lists */}
            {todos.map((todo)=>(
              <div key={todo.id} className='todoItems-list mt-6'>
                <TodoItem todo = {todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
