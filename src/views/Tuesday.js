import React, { useState, useEffect } from "react";
import useStore from "../store/store";
import TodoItem from "../components/TodoItem";
import Footer from "../components/Footer";
import AddTodo from "../components/AddTodo";

function Tuesday(props) {
  const todos = useStore((state) => state.todos);
  const setTodos = useStore((state) => state.setTodos);
  const [refresh, setRefresh] = useState(false);
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://scarce-malleable-grouse.glitch.me"
      : "http://localhost:3000";

  useEffect(() => {
    setTodos(baseURL + "/todos");
  }, [refresh]);

  return (
    <div>
      <AddTodo setRefresh={setRefresh} refresh={refresh} />
      {todos
        .filter((todo) => todo.dueDate === "Tuesday")
        .map((todo) => (
          <TodoItem {...todo} setRefresh={setRefresh} refresh={refresh} />
        ))}
      <Footer />
    </div>
  );
}

export default Tuesday;
