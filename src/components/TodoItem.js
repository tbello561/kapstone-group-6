import { useContext } from "react";
import { TodosContext } from "../App";

function TodoItem(props) {
  const dispatch = useContext(TodosContext);
  return (
    <li className={props.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
          onChange={(event) =>
            dispatch({ type: "TOGGLE_COMPLETE", payload: props.id })
          }
        />
        <label>{props.title}</label>
        <label>{props.workout}</label>
        <label>{props.duedate}</label>
        <button
          className="destroy"
          onClick={(event) =>
            dispatch({ type: "DELETE_TODO", payload: props.id })
          }
        />
      </div>
    </li>
  );
}

export default TodoItem;
