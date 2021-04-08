import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = (set) => ({
  todos: [],
  setTodos: (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((todosData) => {
        set({ todos: todosData });
      });
  },
  toggleTodos: (url, completed) => {
    fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: !completed,
      }),
    });
  },
  deleteTodos: (url, id) => {
    fetch(url, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + id },
    }).then((res) => res.json());
  },
  addTodos: (url, title, workout) => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({
      //   title,
      //   workout,
      // }),
    }).then((res) => res.json());
  },
});

export default create(devtools(useStore));
