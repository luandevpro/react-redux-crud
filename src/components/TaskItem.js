import React, { Component } from "react";

class TaskItem extends Component {
  updateStatus = () => {
    this.props.updateStatus(this.props.tasks.id);
  }
  deleteTasks = () => {
    this.props.deleteTasks(this.props.tasks.id);
  }
  editTasks = () => {
    this.props.editTasks(this.props.tasks);
    this.props.openForm();
  }
  render() {
    const {tasks , index }  = this.props ;
    const {name ,status} = tasks;
    return (
        <tr>
          <td>{index + 1}</td>
          <td>{name}</td>
          <td className="text-center">
            <span className={status ? "label label-success" : "label label-danger"} onClick={this.updateStatus}>
              {status ? 'Kich Hoat' : 'An'}
            </span>
          </td>
          <td className="text-center">
            <button type="button" className="btn btn-warning" onClick={this.editTasks}>
              <span className="fa fa-pencil mr-5" />Sửa
            </button>
            &nbsp;
            <button type="button" className="btn btn-danger" onClick={this.deleteTasks}>
              <span className="fa fa-trash mr-5" />Xóa
            </button>
          </td>
        </tr>
    );
  }
}

export default TaskItem;
