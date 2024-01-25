import React, { useState } from 'react';

const TodoList = ({ onTodoList }) => {

const [title, setTitle] = useState('')
const [date, setDate] = useState('')


  const handleAddTodo = (e) => {
    e.preventDefault();
    onTodoList ({title, date})
    setTitle('')
    setDate('')
  
  };

  return (
    <div className="mb-4">
        <form action="" onSubmit={handleAddTodo}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Todo"
        className="border p-2 mr-2"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 mr-2"
        required
      />
      <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Todo
      </button>

        </form>
    </div>
  );
};

export default TodoList;