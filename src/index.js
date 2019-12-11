import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>
        Welcome to the Truelogic Challenge
      </h1>
      <p>
        {" "}
        <b>Task Description:</b> Given an input integer, return the name of that
        number. Do not use hiphen (-) to separate numbers, just use space.
      </p>
      <p>For example: Input: 126, Output: "one hundred twenty six" </p>
      <div className="playground">
        <div className="form-group">
          <label>Input </label>
          <input type="text" />
        </div>
      </div>
      <div className="output">Output </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
