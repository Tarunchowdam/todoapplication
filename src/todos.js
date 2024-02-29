import React from "react";

const TodoList = ({ todos, deleteHandler, modifyHandler }) => {
    return (
      <div>
        {todos.map((todo, index) => (
          <div key={index} className="todo-item d-flex justify-content-between align-items-center mb-2 p-2 ">
            <h5 className="mb-0">{todo}</h5>
            <div className="btn-group">
              <button
                className="btn btn-warning btn-sm mr-2"
                onClick={() => modifyHandler(index)}>
                Modify
              </button> &nbsp; &nbsp;
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteHandler(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default TodoList;