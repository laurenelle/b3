const dogs = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_GENDER':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
    default:
      return state
  }
}

export default dogs
