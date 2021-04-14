// import React, { useEffect, useState } from "react";
// import TodoItem from "./TodoItem";
// import useStore from "../store/store";
// import Footer from "./Footer";

// function TodoList(props) {
//   const todos = useStore((state) => state.todos);
//   const setTodos = useStore((state) => state.setTodos);
//   const addTodos = useStore((state) => state.addTodos);
//   const [newTodo, setNewTodo] = useState("");

//   const addWorkout = (title) => {
//     addTodos("http://localhost:3000/todos", newTodo);
//     setNewTodo("");
//   };

//   useEffect(() => {
//     setTodos("http://localhost:3000/todos");
//   }, [todos]);

//   function handleChange(event) {
//     setNewTodo(event.target.value);
//   }

//   return (
//     <div>
//       <section className="todoapp">
//         <header className="header">
//           <h3>Workouts</h3>
//           <input
//             value={newTodo}
//             onChange={handleChange}
//             className="new-todo"
//             placeholder="Add a new Workout"
//             autofocus
//           />
//           <br></br>
//           <button onClick={addWorkout}>
//             Add Workout
//           </button>
//         </header>
//       </section>
//       {todos.map((todo) => (
//         <TodoItem {...todo} />
//       ))}
//       <Footer />
//     </div>
//   );
// }
// export default TodoList;
