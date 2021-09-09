import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import AddTodo from "./components/Notes/AddTodo/AddTodo";
import TodoList from "./components/Notes/TodoList/TodoList";
import Bin from "./pages/Bin";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Archive from "./pages/Archive";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <>
                <AddTodo />
                <TodoList />
              </>
            )}
          />
          <Route path="/archive" exact component={Archive} />
          <Route path="/bin" exact component={Bin} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
