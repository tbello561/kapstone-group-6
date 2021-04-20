import React, { useState } from "react";
import useStore from "../store/store";

function Profile(props) {
  const currentUser = useStore((state) => state.currentUser);
  const patchUser = useStore((state) => state.patchUser);
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

  const updateUser = (height, weight, age, id) => {
    patchUser(
      `http://localhost:3000/users/${id}`,
      formData.height,
      formData.weight,
      formData.age
    );
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div>
      <h1 className="profile-title">{currentUser.displayName}'s Profile</h1>
      <div className="profile">
        <div className="pInfo">
          <div>
            <h1>Personal Info</h1>
            <h4>Height: {currentUser.height}</h4>
            <h4>Weight: {currentUser.weight}</h4>
            <h4>Age: {currentUser.age}</h4>
          </div>

          <div>
            <button classname="btn" onClick={toggleInput}>Edit Personal Info</button>
            {showInput ? (
              <div className="profile-inputs">
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
                  <br></br>
                  <button className="btn" onClick={updateUser}>Update</button>
                </form>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="profile-stats">
          <h1>Track Your Progress!</h1>
          <br></br>
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
    </div>
  );
}

export default Profile;
