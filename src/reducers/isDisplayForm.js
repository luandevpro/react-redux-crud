import * as Types from './../constants/ActionTypes'

var initialState = false

const appReducers = (state = initialState , action) => {
   switch(action.type){
      case Types.TOGGLE_FORM:
         return !state
      case Types.OPEN_FORM:
         state = true
         return state 
      case Types.CLOSE_FORM:
         state = false
         return state     
      default:
         return state
   }
}

export default appReducers