import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: Date.now() }]);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoList onTodoList={addTodo} />
      <TodoItem todos={todos} />
    </div>
  );
};

export default Todo;