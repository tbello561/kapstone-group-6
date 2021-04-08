import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Cardio from "./views/Cardio";
import LowerBody from "./views/LowerBody";
import UpperBody from "./views/UpperBody";
import Stretches from "./views/Stretches";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route exact path="/home" />
          <Route exact path="/cardio" component={Cardio} />
          <Route exact path="/lowerbody" component={LowerBody} />
          <Route exact path="/upperbody" component={UpperBody} />
          <Route exact path="/stretches" component={Stretches} />
        </Switch>
      </div>
    </>
  );
}

export default App;
