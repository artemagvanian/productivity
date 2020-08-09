import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import "typeface-sarabun";
import TaskPanel from "./components/TaskPanel";
import "./index.css";

const App = () => {
  return <TaskPanel />;
};

ReactDOM.render(<App />, document.getElementById("root"));
