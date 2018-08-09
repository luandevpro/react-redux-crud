import * as Types from './../constants/ActionTypes'

var initialState = ""

var appReducers = (state = initialState , action ) => {
   switch(action.type){
      case Types.SEARCH_TASKS:
         return action.name
      default:
         return state   
   }
}

export default appReducers