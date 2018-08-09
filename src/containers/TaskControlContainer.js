import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../actions/index'
import Control from '../components/Control';

class TaskControlContainer extends Component {
   render() {
      return <Control {...this.props} />
   }
}

var mapStateToProps = state => {
   return {
      searchTask: state.searchTask,
      sortTask: state.sortTask
   }
}

var mapDispatchToProps = dispatch => {
   return {
      searchTask: (name) => {
         dispatch(actions.searchTasks(name))
      },
      sortTask: (name,value) => {
         dispatch(actions.sortTasks(name,value))
      }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskControlContainer)