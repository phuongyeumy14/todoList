import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, handleSubmit, removeTodo }) => {
  const [edit, setEdit] = useState(null);

  // khi goị handlesubmit thi set lai edit bang null

  return edit ? (
    <TodoForm
      edit={edit}
      handleSubmit={(e) => {
        handleSubmit(e);
        setEdit(null);
      }}
    />
  ) : (
    todos.map((todo, index) => (
      <div className="new-list" key={index}>
        <div key={todo.id}>{todo.text}</div>
        <div className="icons">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <TiEdit
            onClick={() =>
              setEdit({ id: todo.id, text: todo.text, status: todo.status })
            }
            className="edit-icon"
          />
        </div>
      </div>
    ))
  );
};

export default Todo;
