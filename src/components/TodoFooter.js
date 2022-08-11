import { useDispatch, useSelector } from 'react-redux'
import { filterAction } from 'store/actions'

const TodoFooter = () => {
  const arr = ['all', 'active', 'completed']
  const filter = useSelector((state) => state.filter)

  const dispatch = useDispatch()
  const changeFilter = (item) => {
    dispatch(filterAction(item))
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>0</strong> item left
      </span>
      <ul className="filters">
        {arr.map((item) => (
          <li key={item}>
            <a
              href="#/completed"
              className={filter === item ? 'selected' : ''}
              onClick={() => changeFilter(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default TodoFooter
