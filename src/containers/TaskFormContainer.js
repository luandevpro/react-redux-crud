import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../actions/index'
import TaskForm from '../components/TaskForm';

class TaskFormContainer extends Component {
   render() {
      return (
         <TaskForm {...this.props} />
      );
   }
}

var mapStateToProps = state => {
   return {
      isDisplayForm : state.isDisplayForm,
      editTask      : state.editTask
   }
}

var mapDispatchToProps = dispatch => {
   return {
      addForm: (tasks) => {
         dispatch(actions.addForm(tasks))
      },
      closeForm: () => {
         dispatch(actions.closeForm())
      },
      cancelTasks: (tasks) => {
         dispatch(actions.editTasks(tasks))
      }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskFormContainer)