import { combineReducers } from 'redux'
import tasks from './tasks'
import isDisplayForm from './isDisplayForm'
import editTask from './editTask'
import filterTask from './filterTask'
import searchTask from './searchTask'
import sortTask from './sortTask'

const reducers = combineReducers({
   tasks,
   isDisplayForm,
   editTask,
   filterTask,
   searchTask,
   sortTask
})

export default reducers