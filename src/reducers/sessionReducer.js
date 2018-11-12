import * as types from '../actions/actionTypes';

export default function sessionReducer(state = {
  session: !!localStorage.Token,
  employee: {}
}, action) {
  switch(action.type) {
    case types.FIND_USER_SUCCESS:
      return {
        ...state,
        session: !!localStorage.Token,
        employee: action.payload.employee,
        error: ''
      }
    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        session: !!localStorage.Token,
        employee: action.payload,
        error: ''
      }
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        session: !!localStorage.Token,
        employee: action.payload,
        error: ''
      }
    
    case types.LOGOUT:
      return {
        session: !!localStorage.Token,
        employee: {}
      }
    default:
      return state;
  }
}