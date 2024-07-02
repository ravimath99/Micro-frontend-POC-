import React from "react";
import ReactDOM from 'react-dom';
import Test from "./Test";

import "./index.css";

let data = [
  {
    name: 'ravi',
    address: 'math'
  }
];
const App = () => (
  <div className="container">
    <Test/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
