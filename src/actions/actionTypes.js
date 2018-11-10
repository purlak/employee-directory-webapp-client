export const login = (user, history) => {
  
  return dispatch => {
    return fetch(`${API_URL}/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

        body: JSON.stringify({user})
      })
        .then(res => res.json())
        .then((response) => {

          if (response.errors) {

            throw Error(response.errors);

          } else{
            sessionStorage.setItem('Token', response.token);
            history.push("/")
            dispatch(loginSuccess(response.user))
          }
        })
        .catch( errors => {

          sessionStorage.clear()
          dispatch(loginFailure(errors))
        })
  }
}