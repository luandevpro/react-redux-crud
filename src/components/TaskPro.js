import React, { Component } from 'react';
import TaskContainer from '../containers/TaskContainer';
import TaskControlContainer from '../containers/TaskControlContainer';

class TaskPro extends Component {
   onToggleForm = () => {
      if(this.props.editTask && this.props.editTask.id !== ""){
         this.props.openForm()
      }else{
         this.props.toggleForm()
      }
      this.props.onClearTask({
         id: '',
         name: '',
         status: false
       })
   }
   render() {
      var { isDisplayForm } = this.props
      return (
         <div 
            className={isDisplayForm ? 
               "col-xs-8 col-sm-8 col-md-8 col-lg-8" :
               "col-xs-12 col-sm-12 col-md-12 col-lg-12"}
         >
            <button 
               type="button" 
               className="btn btn-primary" 
               onClick={this.onToggleForm}>
               <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>
            <TaskControlContainer />
            <TaskContainer/>
         </div>
      );
   }
}

export default TaskPro;