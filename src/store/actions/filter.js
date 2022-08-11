export const filterAction = (filter) => {
  return {
    type: 'CHANGE_FILTER',
    payload: filter,
  }
}
