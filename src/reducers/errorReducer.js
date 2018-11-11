import * as types from '../actions/actionTypes';

export default function errorReducer(state = {
  error: ''
}, action) {
  switch(action.type) {
    case types.USER_ERROR:
      return {
        error: action.payload.message
      }
    // case types.FORECAST_ERROR:
    //   return {
    //     error: action.payload.description
    //   }
    case types.CLEAR_ERROR:
      return {
        error: ''
      }
    default:
      return state;
  }
}