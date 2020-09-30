import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
import Admin from "./pages/Admin/Admin";
import ExamList from "./pages/ExamList/ExamList";


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">admin</Link>
          </li>
          <li>
            <Link to="/result">result</Link>
          </li>
          {/* <li>
            <Link to="/quiz/">quiz</Link>
          </li> */}
          <li>
            <Link to="/exam-list">exam list</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/exam-list">
          <ExamList />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/quiz/:slug">
          <Quiz />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
