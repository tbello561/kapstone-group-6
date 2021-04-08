import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
 return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={TodoList} />
        </Switch>
      </div>
    </>
  );
}

export default App;
