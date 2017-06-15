
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
  console.log("inside fetchUserData");
  return dispatch => {
    console.log("inside dispatch fetchUserData");
    dispatch(requestUser(userId))
    return fetch(`http://localhost:8080/user/${userId}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)))
  }
}
