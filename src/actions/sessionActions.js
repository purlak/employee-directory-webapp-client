import * as types from './actionTypes';

const loadUserSuccess = (user) => {
  return {
    type: types.LOAD_USER_SUCCESS,
    payload: user
  }
}

const updateUserSuccess = (user) => {
  return {
    type: types.UPDATE_USER_SUCCESS,
    payload: user
  }
}

// const deleteUserCitySuccess = (city) => {
//   return {
//     type: types.DELETE_USER_CITY_SUCCESS,
//     payload: city
//   }
// }

const userError = (message) => {
  return {
    type: types.USER_ERROR,
    payload: message
  }
}

export const loginUser = (credentials) => {
  console.log(credentials)
  return dispatch => {
    return fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => console.log(response)) //response.json())
    .then(result => {
      if (result.errors) {
        dispatch(userError(result.errors))
      } else {
        localStorage.setItem('Token', result.token)
        dispatch(loadUser(result.employee.id))
        dispatch({ type: types.CLEAR_ERROR })
      }
    })
    .catch(error => console.log(error))
  }
}

export const signupUser = (userInfo) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: userInfo})
    })
    .then(response => response.json())
    .then(result => {
      if (result.errors) {
        dispatch(userError(result.errors))
      } else {
        localStorage.setItem('Token', result.token)
        dispatch(findUser(result.token))
        dispatch({ type: types.CLEAR_ERROR })
      }
    })
    .catch(error => console.log(error))
  }
}

export const findUser = (token) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/find', {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    })
    .then(response => response.json())
    .then(result => {
      if (result.errors) {
        dispatch(userError(result.errors))
      } else {
        dispatch(loadUser(result.employee.id))
        dispatch({ type: types.CLEAR_ERROR })
      }
    })
    .catch(error => console.log(error))
  }
}

export const loadUser = (userId) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/users/${userId}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(result => {
      dispatch(loadUserSuccess(result))
    })
    .catch(error => console.log(error))
  }
}

export const updateUser = (user) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    })
    .then(response => response.json())
    .then(result => {
      if (result.errors) {
        dispatch(userError(result.errors))
      } else {
        dispatch(updateUserSuccess(result))
        dispatch({ type: types.CLEAR_ERROR })
      }
    })
    .catch(error => console.log(error))
  }
}

// export const deleteUserCity = (userCityId) => {
//   return dispatch => {
//     return fetch(`http://localhost:3001/api/user_cities/${userCityId}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .then(result => {
//       if (result.errors) {
//         dispatch(userError(result.errors))
//       } else {
//         dispatch(deleteUserCitySuccess(result.id))
//         dispatch({ type: types.CLEAR_ERROR })
//       }
//     })
//   }
// }

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    dispatch({type: types.LOGOUT});
  }
}


