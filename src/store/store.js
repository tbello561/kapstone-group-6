import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = (set) => ({
  todos: [],
  users: [],
  currentUser: {},
  setTodos: (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((todosData) => {
        set({ todos: todosData });
      });
  },
  toggleTodos: (url, completed) => {
    return fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: !completed,
      }),
    });
  },
  deleteTodos: (url, id) => {
    return fetch(url, {
      method: "DELETE",
    }).then((res) => res.json());
  },
  addTodos: (url, title, dueDate) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        title,
        dueDate,
      }),
    }).then((res) => res.json());
  },
  setUsers: (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((usersData) => {
        set({ users: usersData });
      });
  },
  registerUser: (url, username, displayName, password) => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        displayName,
        password,
      }),
    }).then((res) => res.json());
  },
  loginUser: (url, username, password) => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((userData) => {
        set({ currentUser: userData });
      });
  },
  logoutUser: (url, token) => {
    fetch(url + token, {
      // headers: { Authorization: "Bearer " + token },
    }).then((res) => {
      res.json();
      console.log("response", res);
    });
  },
});

export default create(devtools(useStore));
