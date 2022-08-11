import produce from 'immer'

const todos = (state = [], action) =>
  produce(state, (draft) => {
    const { type, payload } = action
    switch (type) {
      case 'GET_LIST':
        return payload

      case 'ADD_TODO':
        draft.push(payload)
        break

      case 'CHANGE_DONE':
        draft.find((item) => item.id === payload.id).done = payload.done
        break

      case 'DEL_TODO':
        return draft.filter((item) => item.id !== payload)

      default:
        return state
    }
  })

export default todos

// export default function todos(state = [], action) {
//   const { type, payload } = action
//   switch (type) {
//     case 'GET_LIST':
//       return payload

//     case 'ADD_TODO':
//       return [...state, payload]

//     case 'DEL_TODO':
//       return state.filter((item) => item.id !== payload)

//     case 'CHANGE_DONE':
//       return state.map((item) => {
//         if (item.id === payload.id) {
//           return {
//             ...item,
//             done: payload.done,
//           }
//         } else {
//           return item
//         }
//       })

//     default:
//       return state
//   }
// }
