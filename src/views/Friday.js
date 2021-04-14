import React, { useState, useEffect } from "react";
import useStore from "../store/store";
import TodoItem from "../components/TodoItem";
import Footer from "../components/Footer";
import AddTodo from "../components/AddTodo";

function Friday(props) {
  const todos = useStore((state) => state.todos);
  const setTodos = useStore((state) => state.setTodos);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setTodos("http://localhost:3000/todos");
  }, [refresh]);

  return (
    <div>
      <AddTodo setRefresh={setRefresh} refresh={refresh} />
      {todos
        .filter((todo) => todo.dueDate === "Friday")
        .map((todo) => (
          <TodoItem {...todo} setRefresh={setRefresh} refresh={refresh} />
        ))}
      <Footer />
    </div>
  );
}

export default Friday;