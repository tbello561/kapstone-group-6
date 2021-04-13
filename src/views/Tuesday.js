import React from "react";
import useStore from "../store/store";
import TodoList from "../components/TodoList";

function Tuesday() {
  const todos = useStore((state) => state.todos);
  return (
    <TodoList todos={todos.filter((todo) => todo.dueDate === "tuesday")} />
  );
}

export default Tuesday;
