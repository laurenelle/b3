
export const addUser = (text) => ({
  type: 'ADD_USER'
})

export const requestUser = (userId) => ({
  type: 'REQUEST_USER',
  userId
})

export const receiveUser = (data) => ({
  type: 'RECEIVE_USER',
  payload: {data: data}
})

export function fetchUserData(userId) {
  return dispatch => {
    dispatch(requestUser(userId))
    return fetch(`http://localhost:8080/user/${userId}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)))
  }
}
