import React from "react";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import {
  Home,
  Mac,
  Ipad,
  Iphone,
  Watch,
  Tv,
  Music,
  Support
} from "./components/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/mac">
          <Mac />
        </Route>
        <Route path="/ipad" component={Ipad} />
        <Route path="/iphone" component={Iphone} />
        <Route path="/watch" component={Watch} />
        <Route path="/tv" component={Tv} />
        <Route path="/music" component={Music} />
        <Route path="/support" component={Support} />
      </header>
    </div>
  );
}

export default App;
