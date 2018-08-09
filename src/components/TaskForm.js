import React, { Component } from "react";
import TaskFormItem from "./TaskFormItem";

class TaskForm extends Component {
  render() {
      var { isDisplayForm } = this.props
      return (
         <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {
               isDisplayForm && <TaskFormItem {...this.props}/>
            }
         </div>
      );
  }
}

export default TaskForm;
