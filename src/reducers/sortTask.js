import * as Types from './../constants/ActionTypes'

var initialState = {
   by: "name",
   value: 0
}

var appReducers = (state = initialState , action ) => {
   switch(action.type){
      case Types.SORT_TASKS:
         return {
            by: action.name,
            value: action.value
         }
      default:
         return state   
   }
}

export default appReducers