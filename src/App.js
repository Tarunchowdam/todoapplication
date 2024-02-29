import React, { useState, useEffect } from "react";
import TodoList from "./todos";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [modifyIndex, setModifyIndex] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (modifyIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[modifyIndex] = task;
      setTodos(updatedTodos);
      setModifyIndex(null);
    } else {
      const newTodos = [...todos, task];
      setTodos(newTodos);
    }
    setTask("");
  };

  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
    setModifyIndex(null);
  };

  const modifyHandler = (indexValue) => {
    setTask(todos[indexValue]);
    setModifyIndex(indexValue);
  };

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h4 className="card-title text-center">TODO APPLICATION</h4>
          <form onSubmit={submitHandler}>
            <div className="input-group mb-3">
              <input
                type="text"
                name="text"
                value={task}
                onChange={changeHandler}
                className="form-control"
                placeholder="Task"
              /> &nbsp; &nbsp;
              <div className="input-group-append">
                <button type="submit" className="btn btn-success">
                    {modifyIndex !== null ? "Modify" : "Add"}
                </button>
              </div>
            </div>
          </form>
          <TodoList
            todos={todos}
            deleteHandler={deleteHandler}
            modifyHandler={modifyHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
