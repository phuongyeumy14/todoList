import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const arr = [
    { id: 1, status: "todo" },
    { id: 2, status: "progress" },
    { id: 3, status: "done" },
  ];

  const [todos, setTodos] = useState([]);
  const [popupStates, setPopupStates] = useState(arr.map(() => false)); // Mảng trạng thái của các popup

  const handleSubmit = (Todo) => {
    if (Todo.isEdit) {
      const index = todos.findIndex((t) => t.id === Todo.id);
      const newTodos = [...todos];
      newTodos[index] = Todo;
      setTodos(newTodos);
    } else {
      setTodos([...todos, Todo]);
    }
    console.log({ Todo, todos });
    // Sau khi xử lý xong, ẩn popup bằng cách đặt trạng thái tương ứng thành false
    const index = arr.findIndex((item) => item.status === Todo.status);
    const newPopupStates = [...popupStates];
    newPopupStates[index] = false;
    setPopupStates(newPopupStates);
  };

  const removeTodo = (todoId) => {
    console.log(todoId);
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="d-flex" style={{ width: "100%" }}>
      <div className="list-arr">
        {arr.map((item, index) => (
          <div key={index} className="todo-app d-flex" style={{ margin: 10 }}>
            {/* Hiển thị popup nếu popupStates[index] là true */}
            {popupStates[index] && (
              <div className="popup">
                <div className="popup_inner">
                  <TodoForm handleSubmit={handleSubmit} />
                  {/* Nút để đóng popup */}
                  <button
                    onClick={() =>
                      setPopupStates((prevState) =>
                        prevState.map((state, i) =>
                          i === index ? false : state
                        )
                      )
                    }
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            {/* Nút để mở popup bằng cách đặt popupStates[index] thành true */}
            <button
              className="btn"
              onClick={() =>
                setPopupStates((prevState) =>
                  prevState.map((state, i) => (i === index ? true : state))
                )
              }
            >
              + New task
            </button>
            <TodoList
              todos={todos.filter((todo) => todo.status === item.status)}
              data={item}
              handleSubmit={handleSubmit}
              removeTodo={removeTodo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
