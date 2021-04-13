import React, { useState } from "react";
import useStore from "../store/store";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";

function Monday(props) {
  const todos = useStore((state) => state.todos);
  // const filteredTodos = []
  return <TodoList todos={todos.filter((todo) => todo.dueDate === "monday")} />;
}

export default Monday;
