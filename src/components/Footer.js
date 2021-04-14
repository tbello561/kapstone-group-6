import { Link } from "react-router-dom";
import useStore from "../store/store";
import TodoList from "../components/TodoList";
import {Button} from 'react'

function Footer(props) {
  const todos = useStore((state) => state.todos);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {
            todos.filter((todo) => {
              if (todo.completed === true) {
                return false;
              }
              return true;
            }).length
          }
        </strong>{" "}
        item(s) left
      </span>
      <ul className="filters">
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link
            to={todos.filter((todo) => {
              if (todo.completed === true) {
                return false;
              }
              return true;
            })}
          >
            Active
          </Link>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
      <button onClick={props.deleteCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
