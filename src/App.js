import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Monday from "./views/Monday";
import Tuesday from "./views/Tuesday";
import Thursday from "./views/Thursday";
import Wednesday from "./views/Wednesday";
import Friday from "./views/Friday";
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
          <Route exact path="/monday" component={Monday} />
          <Route exact path="/tuesday" component={Tuesday} />
          <Route exact path="/wednesday" component={Wednesday} />
          <Route exact path="/thursday" component={Thursday} />
          <Route exact path="/friday" component={Friday} />
        </Switch>
      </div>
    </>
  );
}

export default App;


//Jumping Jacks
//Knee push ups
//Sit Ups
//Stationary Lunges
//Squats
//Hip flexor
//Bicep Curls
//Lateral Raises
//Tricep Dips
//Overhead-Press
//Calf Raises
//Single Leg Bridge
//Wiper Crunch
//Bicycle Kicks
//Forearm Planks
//Side-lying Hip Abduction
//Side Lunges
//Pike-Push ups
//Bicep-Curls
//Russian Twist
//Pike Push ups
//Burpees
//Reverse Crunch
//Running in Place