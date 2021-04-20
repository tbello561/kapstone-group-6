import React, { useEffect } from "react";
import useStore from "../store/store";
import Timer from "./Timer";
import { Button } from "react-bootstrap";

function TodoItem(props) {
  const toggleTodos = useStore((state) => state.toggleTodos);
  const deleteTodos = useStore((state) => state.deleteTodos);
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://bonsai-one.vercel.app"
      : "http://localhost:3000";

  const toggleComplete = (completed, id) => {
    toggleTodos(baseURL + `/todos/${id}`, completed).then(() =>
      props.setRefresh(true)
    );
    props.setRefresh(false);
  };

  const deleteTodo = (id) => {
    deleteTodos(baseURL + `/todos/${id}`).then(() => props.setRefresh(true));
    props.setRefresh(false);
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
        <label className="exercise-title">{props.title}</label>
        <br></br>
        <label className="due-date">Due Date: {props.dueDate}</label>
        <Timer />
        <button
          className="destroy btn btn-danger btn-sm"
          onClick={(event) => deleteTodo(props.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
