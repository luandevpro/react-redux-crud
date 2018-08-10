import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filter , orderBy } from 'lodash'
import * as actions from './../actions/index'
import TaskItem from './../components/TaskItem'
import TaskList from './../components/TaskList'

class TaskContainer extends Component {
   showTasks = (tasks) => {
      var result = null
      var {
         updateStatus,
         deleteTasks,
         editTasks,
         openForm,
         filterTask,
         searchTask,
         sortTask
      } = this.props

      if(filterTask.by !== ""){
         tasks = filter(tasks , task => {
            return task.name.toLowerCase().indexOf(filterTask.by.toLowerCase()) !== -1
         })
      }
      tasks = filter(tasks , task => {
         if(filterTask.value === -1){ return task}
         else{ return filterTask.value === (task.status ? 1 : 0)}  
      })
      if(searchTask !== ""){
         tasks = filter(tasks, task => { 
            return task.name.toLowerCase().indexOf(searchTask.toLowerCase()) !== -1
         })
      }
      if(sortTask){
         if(sortTask.by  === "name"){
            if(sortTask.value === 1){
               tasks = orderBy(tasks , ['name'] , ['asc' ])
            }else if(sortTask.value === -1){
               tasks = orderBy(tasks , ['name'] , ['desc' ])
            }else if(sortTask.value == 0) {
               tasks
            }
         }else{
            if(sortTask.value === -1){
               tasks = orderBy(tasks , ['status'] , ['asc'])
            }else if(sortTask.value ===  1){
               tasks = orderBy(tasks , ['status'] , ['desc'])
            }
         }
      }

      if(tasks.length > 0){
         result = tasks.map((tasks,index) => {
            return <TaskItem 
                     key={index}
                     index={index}
                     tasks={tasks}
                     updateStatus={updateStatus}
                     deleteTasks={deleteTasks}
                     editTasks={editTasks}
                     openForm={openForm}
                  />
         })
      }
      return result
   }
   render() {
      var { tasks } = this.props
      return (
         <TaskList {...this.props}>
            { this.showTasks(tasks) }
         </TaskList>
      );
   }
}

var mapStateToProps = state => {
   return {
      tasks: state.tasks,
      filterTask: state.filterTask,
      searchTask: state.searchTask,
      sortTask: state.sortTask
   }
}

var mapDispatchToProps = dispatch => {
   return {
      updateStatus: (id) => {
         dispatch(actions.updateStatus(id))
      },
      deleteTasks: (id) => {
         dispatch(actions.deleteTasks(id))
      },
      editTasks: (tasks) => {
         dispatch(actions.editTasks(tasks))
      },
      openForm: () => {
         dispatch(actions.openForm())
      },
      filterTasks: (name,value) => {
         dispatch(actions.filterTasks(name,value))
      }
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskContainer)