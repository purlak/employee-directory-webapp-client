import {
  createStore,
  applyMiddleware,
  combinedReducers
} from 'redux'

import thunk from 'redux-thunk';

const employeesReducer = (state=[], action) => {
  switch(action,type) {
    case 'GET_EMPLOYEES_SUCCESS':
      return action.employee;


    defaults
      return state;
  }

}

const employees = employeesReducer();
console.log(employee)