import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Cardio from "./views/Cardio";
import LowerBody from "./views/LowerBody";
import UpperBody from "./views/UpperBody";
import Stretches from "./views/Stretches";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./views/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cardio" component={TodoList} />
          <Route exact path="/lowerbody" component={TodoList} />
          <Route exact path="/upperbody" component={TodoList} />
          <Route exact path="/stretches" component={TodoList} />
        </Switch>
      </div>
    </>
  );
}

export default App;
