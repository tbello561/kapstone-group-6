import React, { useState } from "react";
import useStore from "../store/store";

function Profile() {
  const currentUser = useStore((state) => state.currentUser);
  const todos = useStore((state) => state.todos);
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
  });
  const [showInput, setShowInput] = useState(false);

  function toggleInput() {
    setShowInput((showInput) => !showInput);
  }

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  //   const submitHandler = (e) => {
  //     const inputName = e.target.name;
  //     const inputValue = e.target.value;
  //     setFormData((state) => ({ [inputName]: inputValue }));
  //   };

  return (
    <div className="profile">
      <h1 className="profile-title">{currentUser.displayName}'s Profile</h1>
      <div>
        <h3>Personal Info</h3>
        <h4>Height: {formData.height}</h4>
        <h4>Weight: {formData.weight}</h4>
        <h4>Age: {formData.age}</h4>
      </div>
      <div>
        <button onClick={toggleInput}>Edit Personal Info</button>
        {showInput ? (
          <div className="profile-inputs">
            {/* <h3>Update Your Personal Info</h3> */}
            <form id="login-form">
              <label htmlFor="username">Height: </label>
              <br></br>
              <input
                className="logInput"
                type="text"
                name="height"
                value={formData.height}
                autoFocus
                required
                onChange={handleChange}
              />
              <br></br>
              <label htmlFor="password">Weight: </label>
              <br></br>
              <input
                className="logInput"
                type="text"
                name="weight"
                value={formData.weight}
                required
                onChange={handleChange}
              />
              <br></br>
              <label htmlFor="password">Age: </label>
              <br></br>
              <input
                className="logInput"
                type="text"
                name="age"
                value={formData.age}
                required
                onChange={handleChange}
              />
              {/* <br></br>
              <button
                onClick={handleChange}
                type="submit"
                class="btn btn-primary"
              >
                Update
              </button> */}
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="profile-stats">
        <h3>Exercises Completed This Week: </h3>
        <h4>
          {" "}
          {
            todos.filter((todo) => {
              if (todo.completed === true) {
                return true;
              }
              return false;
            }).length
          }
        </h4>
        <h3>Calories Burned This Week: </h3>
        <h4>
          {" "}
          {todos.filter((todo) => {
            if (todo.completed === true) {
              return true;
            }
            return false;
          }).length * 112}
        </h4>
      </div>
    </div>
  );
}

export default Profile;
