import{useState, useEffect} from "react"

import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Login from "./components/Login";

function App() {
 return (
    <>
      <div className="App">
         <Login/>
        <Header />
        <Switch>
          <Route path="/" component={TodoList} />
        </Switch>
      </div>
    </>
  );
}

export default App;
