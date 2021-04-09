// import React, { useState } from "react";
// import { createUser, loginRequest } from "../fetchRequests";
// // import { LOGIN, useStore } from "../store/store";

// export default function Register(props) {
//   const dispatch = useStore((state) => state.dispatch);

//   const [formData, setFormData] = useState({
//     username: "",
//     displayName: "",
//     password: "",
//   });

//   function submitRegister(e) {
//     e.preventDefault();
//     createUser(formData.username, formData.displayName, formData.password).then(
//       (data) => {
//         if (data.statusCode === 200) {
//           const userData = {
//             username: data.user.username,
//             password: formData.password,
//           };

//           //if signup is sucessful, login the user
//           loginRequest(userData.username, userData.password).then(
//             (userData) => {
//               dispatch({ type: LOGIN, payload: userData });
//             }
//           );
//         } else {
//           //display that the user could not be created etc
//         }
//       }
//     );
//   }

//   const handleChange = (e) => {
//     const inputName = e.target.name;
//     const inputValue = e.target.value;
//     setFormData((state) => ({ ...state, [inputName]: inputValue }));
//   };

//   return (
//     <div className="register">
//       <form id="register-form" onSubmit={submitRegister}>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           required
//           onChange={handleChange}
//         />
//         <label htmlFor="username">Display Name</label>
//         <input
//           type="text"
//           name="displayName"
//           value={formData.displayName}
//           required
//           onChange={handleChange}
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           required
//           onChange={handleChange}
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }
