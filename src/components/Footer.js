import { Link } from "react-router-dom";
import useStore from "../store/store";
import TodoList from "../components/TodoList";
import {Button} from 'react'

function Footer(props) {
  const todos = useStore((state) => state.todos);

  // const deleteCompleted = (todo) => {
  //   todos.filter((todo) => !todo.completed);
  // };

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
        routines left this week
      </span>
      {/* <ul className="filters">
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
      </ul> */}
      {/* <button onClick={deleteCompleted} className="clear-completed">
        Clear completed
      </button> */}
    </footer>
  );
}

export default Footer;
