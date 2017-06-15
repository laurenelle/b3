const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
    case 'REQUEST_USER':
      return [
        ...state,
        {
          id: action.id
        }
      ]
    case 'RECEIVE_USER':
      return [
        ...state,
        {
          id: action.id
        }
      ]
    default:
      return state
  }
}

export default users
