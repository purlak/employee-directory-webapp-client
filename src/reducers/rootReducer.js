
import { combineReducers } from 'redux';
// import employeesReducer from './employeesReducer';
import session from './sessionReducer';
import error from './errorReducer';    
     
const rootReducer = combineReducers({
   //employees: employeesReducer
   session,
   error
  
});
     
export default rootReducer;     