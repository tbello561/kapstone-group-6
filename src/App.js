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
          <Route exact path="/tuesday" component={TodoList} />
          <Route exact path="/wednesday" component={TodoList} />
          <Route exact path="/thursday" component={TodoList} />
          <Route exact path="/friday" component={TodoList} />
        </Switch>
      </div>
    </>
  );
}

export default App;
