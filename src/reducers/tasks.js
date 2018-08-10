import * as Types from './../constants/ActionTypes'
import { findIndex } from 'lodash'
var randomstring = require('randomstring');

var data = JSON.parse(localStorage.getItem('tasks'))
var initialState = data ? data : []

const appReducers = (state = initialState , action) => {
   var index = -1
   var { id } = action
   switch(action.type){
      case Types.LIST_ALL:
         return [...state] 
      case Types.UPDATE_STATUS:
         index = findIndex(state,task => { return task.id === id })
         state[index].status = !state[index].status
         localStorage.setItem('tasks', JSON.stringify(state))
         return [...state]
      case Types.ADD_TASKS:
         var newTasks = {
            id: action.tasks.id,
            name: action.tasks.name,
            status: action.tasks.status
         }
         if(newTasks.id){
            index = findIndex(state,task => { return task.id === newTasks.id })
            state[index] = action.tasks
         }else {
            newTasks.id = randomstring.generate()
            state.push(newTasks)
         }     
         localStorage.setItem('tasks', JSON.stringify(state))
         return [...state]
      case Types.DELETE_TASKS:
         index = findIndex(state,task => { return task.id === id})
         if(index !== -1){
            state.splice(index,1)
         }
         localStorage.setItem('tasks' , JSON.stringify(state))
         return [...state]
      default:
         return [...state]
   }
}

export default appReducers