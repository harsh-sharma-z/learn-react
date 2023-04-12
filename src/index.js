import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Person from "./components/Person";
import { TodoList } from "./components/TodoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Person />
    <TodoList/>
    <App />
    <App />
    <TodoList/>
  </div>
);
