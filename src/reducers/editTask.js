import * as Types from './../constants/ActionTypes'

var initialState = {}

var appReducers = (state = initialState , action ) => {
   switch(action.type){
      case Types.EDIT_TASKS:
         return action.tasks
      default:
         return state   
   }
}

export default appReducers