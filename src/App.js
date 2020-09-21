import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Note from "./components/Note/Note";
import page from "./components/Profile/404page";
import UserList from "./components/Profile/UserList";
import UserProfile from "./components/Profile/UserProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/note" exact component={Note} />
          <Route path="/list" exact component={UserList} />
          <Route path="/:profile" exact component={UserProfile} />
          <Route component={page} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
