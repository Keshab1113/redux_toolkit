import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch  = useDispatch()
  return (
    <div className=' border-t'>
          <h1 className=' text-center text-2xl font-semibold mb-6'>Todos</h1>
          <div className="space-y-2">
          {
              todos.map((todo) => (
                  <li key={todo.id} className="flex justify-between items-center p-2 bg-gray-200 rounded-lg">
                      {todo.text}
                      <button onClick={() => dispatch(removeTodo(todo.id))} className="bg-red-500 text-white p-1 rounded-lg hover:bg-red-600">Delete</button>
                  </li>
              ))
              }
          </div>
    </div>
  )
}

export default Todos
