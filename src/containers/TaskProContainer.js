import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../actions/index'
import TaskPro from '../components/TaskPro';

class TaskProContainer extends Component {
   render() {
      return (
         <TaskPro {...this.props}>
         </TaskPro>
      );
   }
}

var mapStateToProps = state => {
   return {
      isDisplayForm : state.isDisplayForm,
      editTask: state.editTask
   }
}

var mapDispatchToProps = dispatch => {
   return {
      toggleForm : () => {
         dispatch(actions.toggleForm())
      },
      onClearTask: (tasks) => {
         dispatch(actions.editTasks(tasks))
      },
      openForm: () => {
         dispatch(actions.openForm())
      }
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskProContainer)