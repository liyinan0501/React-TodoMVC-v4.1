import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { delTodo, changeDone, changeTodo } from 'store/actions'

export default function TodoItem({ item }) {
  const dispatch = useDispatch()
  const del = (id) => {
    dispatch(delTodo(id))
  }

  const change = (id, done) => {
    dispatch(changeDone(id, done))
  }

  const [current, setCurrent] = useState('')
  const inputRef = useRef()
  const showEdit = async (id) => {
    await setCurrent(id)
    inputRef.current.focus()
  }

  // when editing, auto focus.
  // useEffect(() => {
  //   inputRef.current.focus()
  // }, [current])

  const keyUp = (e, id) => {
    if (e.KeyCode === 27) {
      setCurrent('')
    }
    if (e.keyCode === 13) {
      dispatch(changeTodo(id, e.target.value))
      setCurrent('')
    }
  }

  return (
    <li
      className={[
        item.done ? 'completed' : '',
        item.id === current ? 'editing' : '',
      ].join(' ')}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.done}
          onChange={(e) => change(item.id, e.target.checked)}
        />
        <label onDoubleClick={() => showEdit(item.id)}>{item.name}</label>
        <button className="destroy" onClick={() => del(item.id)} />
      </div>
      <input
        className="edit"
        defaultValue={item.name}
        ref={inputRef}
        onBlur={() => setCurrent('')}
        onKeyUp={(e) => keyUp(e, item.id)}
      />
    </li>
  )
}
