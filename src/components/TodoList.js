import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import useStore from "../store/store";
import Footer from "./Footer";

function TodoList(props) {
  const todos = useStore((state) => state.todos);
  const setTodos = useStore((state) => state.setTodos);
  const addTodos = useStore((state) => state.addTodos);
  const [newTodo, setNewTodo] = useState("");

  const addWorkout = (title, workout) => {
    addTodos("http://localhost:3000/todos", title, workout);
  };

  useEffect(() => {
    setTodos("http://localhost:3000/todos");
  }, []);

  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>Workouts</h1>
          <input
            value={newTodo}
            onChange={handleChange}
            className="new-todo"
            placeholder="Add a new Workout"
            autofocus
          />
          <br></br>
          <button onClick={addWorkout}>Add Workout</button>
        </header>
      </section>
      {todos.map((todo) => (
        <TodoItem {...todo} />
      ))}
      <Footer />
    </div>
  );
}
export default TodoList;
