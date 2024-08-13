import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import Todos from './Todos';

function AddTodo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(newTodo))
        setNewTodo('')
    };

    return (
        <div className="min-h-screen bg-blue-950 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
                <form onSubmit={addTodoHandler} className="flex mb-4">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        className="border border-gray-300 rounded-l-lg p-2 flex-grow"
                        placeholder="Add a new task"
                    />
                    <button
                        type='submit'
                        className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
                    >
                        Add
                    </button>
                </form>
                <Todos />
            </div>
            
        </div>
    );
}

export default AddTodo;
