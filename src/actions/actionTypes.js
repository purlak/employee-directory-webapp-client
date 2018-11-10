const API_URL = "http://localhost:3001/api"

const loginSuccess = (employee) => {
  return {
    type: 'LOGIN',
    employee: employee
  }
}

const loginFailure = (errors) => {
  return {
    type: 'LOGIN_FAILURE',
    errors: errors.message
  }
}

export const login = (employee, history) => {
  
  return dispatch => {
    return fetch(`${API_URL}/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

        body: JSON.stringify({employee})
      })
        .then(res => res.json())
        .then((response) => {

          if (response.errors) {

            throw Error(response.errors);

          } else{
            sessionStorage.setItem('Token', response.token);
            history.push("/")
            dispatch(loginSuccess(response.employee))
          }
        })
        .catch( errors => {

          sessionStorage.clear()
          dispatch(loginFailure(errors))
        })
  }
}