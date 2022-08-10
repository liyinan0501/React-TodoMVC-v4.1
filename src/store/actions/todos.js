import axios from 'axios'

export const getList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:8888/todos')
    dispatch({
      type: 'GET_LIST',
      list: res.data,
    })
  }
}
