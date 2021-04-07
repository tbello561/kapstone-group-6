import { Switch, Route } from "react-router-dom";
import { createContext } from "react";
import "./App.css";
import Header from "./components/Header";

export const TodosContext = createContext(null);

function App() {
  return (
    <>
      <TodosContext.Provider value={dispatch}>
        <div className="App">
          <Header />
          {/* <Switch>
        <Route exact path="/" component={} />
      </Switch> */}
        </div>
      </TodosContext.Provider>
    </>
  );
}

export default App;
