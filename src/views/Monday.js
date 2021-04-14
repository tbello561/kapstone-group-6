import React, { useState, useEffect } from "react";
import useStore from "../store/store";
import TodoItem from "../components/TodoItem";
import Footer from "../components/Footer";
import AddTodo from "../components/AddTodo";

function Monday(props) {
  const todos = useStore((state) => state.todos);
  const setTodos = useStore((state) => state.setTodos);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setTodos("http://localhost:3000/todos");
  }, [refresh]);

  return (
    <div>
      <AddTodo />
      {todos
        .filter((todo) => todo.dueDate === "Monday")
        .map((todo) => (
          <TodoItem {...todo} setRefresh={setRefresh} refresh={refresh} />
        ))}
      <Footer />
    </div>
  );
}

export default Monday;
