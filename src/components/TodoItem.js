import React, { useEffect } from "react";
import useStore from "../store/store";

function TodoItem(props) {
  const toggleTodos = useStore((state) => state.toggleTodos);

  const toggleComplete = (completed, id) => {
    toggleTodos(`http://localhost:3000/todos/${id}`, completed);
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
        <label>{props.workout}</label>
        <br></br>
        <label>{props.dueDate}</label>
        {/* <button
          className="destroy"
          onClick={(event) =>
            dispatch({ type: "DELETE_TODO", payload: props.id })
          }
        /> */}
      </div>
    </li>
  );
}

export default TodoItem;
