import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { delTodo, changeDone } from 'store/actions'

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

  // useEffect(() => {
  //   inputRef.current.focus()
  // }, [current])

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
      />
    </li>
  )
}
