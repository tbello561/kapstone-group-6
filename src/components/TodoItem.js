import React, { useEffect } from "react";
import useStore from "../store/store";
import Timer from "./Timer";

function TodoItem(props) {
  const toggleTodos = useStore((state) => state.toggleTodos);
  const deleteTodos = useStore((state) => state.deleteTodos);

  const toggleComplete = (completed, id) => {
    toggleTodos(`http://localhost:3000/todos/${id}`, completed);
  };

  const deleteTodo = (id) => {
    deleteTodos(`http://localhost:3000/todos/${id}`);
  };
  return (
    <li className={props.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
          onChange={(event) => toggleComplete(props.completed, props.id)}
        />
        <label>{props.title}</label>
        <br></br>
        <label>Due Date: {props.dueDate}</label>
        <Timer />
        <button className="destroy" onClick={(event) => deleteTodo(props.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
