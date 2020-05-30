import React, { useState, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import shortid from 'shortid'
import DatePicker from 'react-datepicker'
import { StoreState } from '../store/store'
import { addTodo, completeTodo, removeTodo, TodoItem } from './todoActions'
import LoadImages from '../loadImages/loadImages'
// import { Line } from 'react-chartjs-2'

const Todo = () => {
  const dispatch = useDispatch()
  const { todo } = useSelector((state: StoreState) => state)
  const [value, setValue] = useState('')
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(
      addTodo({
        id: shortid(),
        text: value,
        completed: false,
        addedAt: selectedDate,
      })
    )
    setValue('')
    setSelectedDate(null)
  }

  const handleComplete = (id: string) => {
    dispatch(
      completeTodo({
        id,
      })
    )
  }

  const handleRemove = (id: string) => {
    dispatch(
      removeTodo({
        id,
      })
    )
  }

  return (
    <div style={{ marginTop: 120, marginLeft: 100 }}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add todo" onChange={handleChange} value={value} />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy H:mm aa"
        />
        <button type="submit" style={{ marginLeft: 40 }}>
          Add
        </button>
      </form>
      <ul>
        {Object.values(todo).map((item: TodoItem, index) => (
          <Fragment key={item.id}>
            <li
              style={{
                textDecoration: !item.completed ? 'inherit' : 'line-through',
                color: !item.completed ? '#000' : 'green',
              }}
            >
              {item.text}, Added:{' '}
              {item.addedAt &&
                item.addedAt.toLocaleDateString() + ' ' + item.addedAt.toLocaleTimeString()}
              <button onClick={() => handleComplete(item.id)} style={{ marginLeft: 20 }}>
                Complete
              </button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  )
}

export default Todo
