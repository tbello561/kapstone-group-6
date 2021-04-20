import React, { useState } from "react";
import useStore from "../store/store";
import { Button } from "react-bootstrap";

function Monday(props) {
  const addTodos = useStore((state) => state.addTodos);
  const [newTodo, setNewTodo] = useState("");
  const [newDate, setNewDate] = useState("");
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://bonsai-one.vercel.app"
      : "http://localhost:3000";

  const addWorkout = (title, dueDate) => {
    addTodos(baseURL + "/todos", newTodo, newDate).then(() =>
      props.setRefresh(true)
    );
    props.setRefresh(false);
    setNewTodo("");
    setNewDate("");
  };

  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  function handleDate(event) {
    setNewDate(event.target.value);
  }

  return (
    <div>
      <h2>Today's Workouts</h2>
      <section className="todoapp">
        <header className="header-workout">
          <input
            value={newTodo}
            onChange={handleChange}
            className="new-todo"
            placeholder="Workout Name"
            autofocus
          />
          <br></br>
          <input
            value={newDate}
            onChange={handleDate}
            className="new-todo"
            placeholder="Add a Due Day"
            autofocus
          />
          <br></br>
          <Button variant="primary" onClick={addWorkout}>
            Add Workout{" "}
          </Button>
        </header>
      </section>
    </div>
  );
}

export default Monday;
