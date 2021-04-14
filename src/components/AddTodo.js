import React, { useState } from "react";
import useStore from "../store/store";

function Monday(props) {
  const addTodos = useStore((state) => state.addTodos);
  const [newTodo, setNewTodo] = useState("");

  const addWorkout = (title) => {
    addTodos("http://localhost:3000/todos", newTodo);
    setNewTodo("");
  };

  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>Today's Workouts</h1>
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
    </div>
  );
}

export default Monday;
