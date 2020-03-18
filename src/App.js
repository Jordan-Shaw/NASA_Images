import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Main from "./Pages/Main";
import SingleImage from "./Pages/SingleImage";


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <SingleImage path="/:nasa_id"/>
      </Router>
    </div>
  );
}

export default App;
