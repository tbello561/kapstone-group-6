import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import useStore from "../store/store";


function TodoList(props) {
  const todos = useStore((state) => state.todos);
  const setTodos = useStore((state) => state.setTodos);
  console.log(todos);

  useEffect(() => {
    setTodos("http://localhost:3000/todos");
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem {...todo} />
      ))}
      

    </div>
  );
}
export default TodoList;
