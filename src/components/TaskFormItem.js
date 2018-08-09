import React, { Component } from "react";

class TaskFormItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      status: true
    }
  }
  componentWillMount(){
    if(this.props.editTask){
      var { editTask } = this.props
      this.setState({
        id: editTask.id,
        name: editTask.name,
        status: editTask.status
      })
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.editTask) {
      var { editTask } = nextProps 
      this.setState({
         id: editTask.id,
         name: editTask.name,
         status: editTask.status
       })
    }else if(nextProps && nextProps.editTask === null){
      this.setState({
        id: '',
        name: '',
        status: true
      })
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    if(name === 'status') {
      value = target.value === 'true' ? true : false
    }
    this.setState({
      [name]: value
    })
  }
  onSubmit = (e) => {
   e.preventDefault();
   this.props.addForm(this.state);
   this.props.closeForm();
  }
  cancelTasks = () => {
      this.props.cancelTasks({
            name: '',
            status: false
      })
  }
  render() {
      var { editTask } = this.props
      return (
         <div className="panel panel-warning">
         <div className="panel-heading">
            <h3 className="panel-title">
               {
                  editTask.id === "" 
                  ? "Thêm Công Việc" 
                  : "Sua Cong Viec"
               }
            </h3>
         </div>
         <div className="panel-body">
            <form onSubmit={this.onSubmit}>
               <div className="form-group">
               <label>Tên :</label>
               <input 
                  type="text" 
                  className="form-control" 
                  name="name" 
                  value={this.state.name}
                  onChange={this.onChange}
               />
               </div>
               <label>Trạng Thái :</label>
               <select 
               className="form-control" 
               required="required"
               name="status" 
               value={this.state.status}
               onChange={this.onChange}
               >
               <option value={true}>Kích Hoạt</option>
               <option value={false}>Ẩn</option>
               </select>
               <br />
               <div className="text-center">
               <button type="submit" className="btn btn-warning">
                  {
                     editTask.id === ""
                     ? "Create"
                     : "Update"
                  }
               </button>&nbsp;
               <button type="button" className="btn btn-danger" onClick={this.cancelTasks}>
                  Hủy Bỏ
               </button>
               </div>
            </form>
         </div>
         </div>
      );
  }
}

export default TaskFormItem
