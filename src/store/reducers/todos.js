export default function todos(state = [], action) {
  switch (action.type) {
    case 'GET_LIST':
      return action.list

    default:
      return state
  }
}
