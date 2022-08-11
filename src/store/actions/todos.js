import axios from 'axios'

export const getList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:8888/todos')
    dispatch({
      type: 'GET_LIST',
      payload: res.data,
    })
  }
}

export const addTodo = (name) => {
  return async (dispatch) => {
    const res = await axios.post('http://localhost:8888/todos', {
      name,
      done: false,
    })
    dispatch({
      type: 'ADD_TODO',
      payload: res.data,
    })
  }
}

export const delTodo = (id) => {
  return async (dispatch) => {
    const res = await axios.delete(`http://localhost:8888/todos/${id}`)
    dispatch({
      type: 'DEL_TODO',
      payload: id,
    })
  }
}
