import React, { useState } from "react";
import useStore from "../store/store";
import { Button } from "react-bootstrap";

function Monday(props) {
  const addTodos = useStore((state) => state.addTodos);
  const [newTodo, setNewTodo] = useState("");
  const [newDate, setNewDate] = useState("");

  const addWorkout = (title, dueDate) => {
    addTodos("http://localhost:3000/todos", newTodo, newDate).then(() =>
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
      <section className="todoapp">
        <header className="header">
          <h1>Today's Workouts</h1>
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
          {/* <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">
              Choose a Day
            </label>
            <select
              onchange={handleDate}
              class="form-select"
              id="inputGroupSelect01"
            >
              <option selected>Choose...</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
            </select>
          </div> */}
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
