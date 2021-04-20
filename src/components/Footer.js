import { Link } from "react-router-dom";
import useStore from "../store/store";
import TodoList from "../components/TodoList";
import { Button } from "react";

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
        routines left this week
      </span>
    </footer>
  );
}

export default Footer;
