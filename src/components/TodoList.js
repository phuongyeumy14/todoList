import React from "react";
import Todo from "./Todo";

function TodoList({ data, todos, handleSubmit, removeTodo }) {
  return (
    <>
      <h1>{data.status}</h1>
      <Todo todos={todos} handleSubmit={handleSubmit} removeTodo={removeTodo} />
    </>
  );
}

export default TodoList;
