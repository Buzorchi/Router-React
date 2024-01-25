import React from 'react';

const TodoItem = ({ todos }) => {
  return (
    <ul className="pl-4 list-decimal">
      {todos.map((todo) => (
        <li key={todo.id} className="mb-2">
          {todo.title} - {todo.date}
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;