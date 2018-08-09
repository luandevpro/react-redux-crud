import * as Types from './../constants/ActionTypes'

export const toggleForm = () => {
   return {
      type: Types.TOGGLE_FORM
   }
}

export const openForm = () => {
   return {
      type: Types.OPEN_FORM
   }
}

export const closeForm = () => {
   return {
      type: Types.CLOSE_FORM
   }
}

export const updateStatus = (id) => {
   return {
      type: Types.UPDATE_STATUS,
      id
   }
}

export const addForm = (tasks) => {
   return {
      type: Types.ADD_TASKS,
      tasks
   }
}

export const deleteTasks = (id) => {
   return {
      type: Types.DELETE_TASKS,
      id
   }
}

export const editTasks = (tasks) => {
   return {
      type: Types.EDIT_TASKS,
      tasks
   }
}

export const filterTasks = (name,value) => {
   return {
      type: Types.FILTER_TASKS,
      name,
      value
   }
}


export const searchTasks = (name) => {
   return {
      type: Types.SEARCH_TASKS,
      name
   }
}


export const sortTasks = (name,value) => {
   return {
      type: Types.SORT_TASKS,
      name,
      value
   }
}
