import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import useStore from "../store/store";

function TodoList(props) {
  const todos = useStore((state) => state.todos);
  const setTodos = useStore((state) => state.setTodos);

  const searchCardio = () => {
    setTodos("http://localhost:3000/todos?search=cardio");
  };

  const searchUpper = () => {
    setTodos("http://localhost:3000/todos?search=upperbody");
  };

  const searchLower = () => {
    setTodos("http://localhost:3000/todos?search=lowerbody");
  };

  const filterCompleted = () => {
    setTodos("http://localhost:3000/todos?filterBy=completed");
  };

  const filterActive = () => {
    setTodos("http://localhost:3000/todos?filterBy=active");
  };

  const filterAll = () => {
    setTodos("http://localhost:3000/todos");
  };

  useEffect(() => {
    setTodos("http://localhost:3000/todos");
  }, []);

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h2>All Workouts</h2>
        </header>
      </section>
      <div class="btn-group" role="group">
        <button
          id="btnGroupDrop1"
          type="button"
          class="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter Workout by
        </button>
        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <li>
            <a onClick={searchCardio} class="dropdown-item" href="#">
              Cardio
            </a>
          </li>
          <li>
            <a onClick={searchUpper} class="dropdown-item" href="#">
              Upper Body
            </a>
          </li>
          <li>
            <a onClick={searchLower} class="dropdown-item" href="#">
              Lower Body
            </a>
          </li>
        </ul>
      </div>
      <span> </span>
      <div class="btn-group" role="group">
        <button
          id="btnGroupDrop1"
          type="button"
          class="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter Completed
        </button>
        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <li>
            <a onClick={filterActive} class="dropdown-item" href="#">
              Active
            </a>
          </li>
          <li>
            <a onClick={filterCompleted} class="dropdown-item" href="#">
              Completed
            </a>
          </li>
          <li>
            <a onClick={filterAll} class="dropdown-item" href="#">
              All
            </a>
          </li>
        </ul>
      </div>
      {todos.map((todo) => (
        <TodoItem {...todo} setRefresh={setRefresh} refresh={refresh} />
      ))}
    </div>
  );
}
export default TodoList;
