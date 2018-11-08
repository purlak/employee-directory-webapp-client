
import { combineReducers } from "redux";
import employeesReducer from './reducers/employeesReducer';
    
     
const rootReducer = combineReducers({
  employees: employeesReducer;
  
});
     
export default rootReducer;     