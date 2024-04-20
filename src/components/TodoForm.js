import React, { useState } from "react";
import STATUS from "./StatusOptions";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const [status, setStatus] = useState(
    props.edit ? props.edit.status : STATUS.TODO
  );

  const handleChange = (e) => {
    setInput(e.target.value); // cập nhật nd mới khi nhập input
  };

  const handleStatusChange = (status) => {
    setStatus(status); // cập nhật nd mới khi nhập input
  };

  const handleSubmitAdd = (e) => {
    //Hàm handleSubmit xử lý khi nhấn Enter hoặc click vào nút submit
    e.preventDefault(); // ngăn reload trang web
    const data = {
      id: props.edit ? props.edit.id : new Date().getTime(),
      text: input,
      status,
      isEdit: props.edit ? true : false,
    };
    console.log(data);
    props.handleSubmit(data);
    setInput("");
    setStatus(STATUS.TODO);
  };

  return (
    <form onSubmit={handleSubmitAdd} className="todo-form">
      {props.edit ? ( // nếu sử dụng edit thì hien thi ra
        <>
          <input
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input edit"
          />
          <div className="todo-status1">
            <div>
              <input
                type="radio"
                id="todo"
                name="status"
                value={STATUS.TODO}
                checked={status === STATUS.TODO}
                onChange={() => handleStatusChange(STATUS.TODO)}
              />
              <label htmlFor="todo">Todo</label>
            </div>
            <div>
              <input
                type="radio"
                id="progress"
                name="status"
                value={STATUS.PROGRESS}
                checked={status === STATUS.PROGRESS}
                onChange={() => handleStatusChange(STATUS.PROGRESS)}
              />
              <label htmlFor="progress">Progress</label>
            </div>
            <div>
              <input
                type="radio"
                id="done"
                name="status"
                value={STATUS.DONE}
                checked={status === STATUS.DONE}
                onChange={() => handleStatusChange(STATUS.DONE)}
              />
              <label htmlFor="done">Done</label>
            </div>
          </div>
          <button onClick={handleSubmitAdd} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
          />

          {/* checkbox Status */}
          <div className="todo-status2">
            <div>
              <input
                type="radio"
                id="todo"
                name="status"
                value={STATUS.TODO}
                checked={status === STATUS.TODO}
                onChange={() => handleStatusChange(STATUS.TODO)}
              />
              <label htmlFor="todo">Todo</label>
            </div>
            <div>
              <input
                type="radio"
                id="progress"
                name="status"
                value={STATUS.PROGRESS}
                checked={status === STATUS.PROGRESS}
                onChange={() => handleStatusChange(STATUS.PROGRESS)}
              />
              <label htmlFor="progress">Progress</label>
            </div>
            <div>
              <input
                type="radio"
                id="done"
                name="status"
                value={STATUS.DONE}
                checked={status === STATUS.DONE}
                onChange={() => handleStatusChange(STATUS.DONE)}
              />
              <label htmlFor="done">Done</label>
            </div>
          </div>
          <button onClick={handleSubmitAdd} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
