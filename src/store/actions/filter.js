import { CHANGE_FILTER } from 'store/constants/index'

export const filterAction = (filter) => {
  return {
    type: CHANGE_FILTER,
    payload: filter,
  }
}
