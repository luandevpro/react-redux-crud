import * as Types from './../constants/ActionTypes'

var initialState = {
   by: '',
   value: -1
}

var appReducers = (state = initialState , action ) => {
   switch(action.type){
      case Types.FILTER_TASKS:
         return {
            by: action.name,
            value: parseInt(action.value,10)
         }
      default:
         return state   
   }
}

export default appReducers