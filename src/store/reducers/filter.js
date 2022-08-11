import { CHANGE_FILTER } from 'store/constants/index'

export default function filter(state = 'all', action) {
  const { type, payload } = action
  switch (type) {
    case CHANGE_FILTER:
      return payload

    default:
      return state
  }
}
