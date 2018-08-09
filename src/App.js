import React, { Component } from "react";
import "./App.css";
import TaskFormContainer from "./containers/TaskFormContainer";
import TaskProContainer from "./containers/TaskProContainer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          
         <TaskFormContainer />

         <TaskProContainer />

        </div>

      </div>
    );
  }
}

export default App;
