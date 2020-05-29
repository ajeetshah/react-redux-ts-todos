import React, { useState, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoreState } from '../store/store'
import { addTodo, completeTodo, removeTodo, TodoItem } from './todoActions'
import shortid from 'shortid'

const Todo = () => {
  const dispatch = useDispatch()
  const { todo } = useSelector((state: StoreState) => state)
  const [value, setValue] = useState('')

  const handleAdd = () => {
    dispatch(
      addTodo({
        id: shortid(),
        text: value,
        completed: false,
        addedAt: 'DATE HERE',
      })
    )
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

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input type="text" placeholder="Add todo" onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {Object.values(todo).map((item: TodoItem, index) => (
          <Fragment key={item.id}>
            <li
              style={{
                textDecoration: !item.completed ? 'inherit' : 'line-through',
                color: !item.completed ? '#000' : 'green',
              }}
            >
              {item.text}
              <button onClick={() => handleComplete(item.id)}>Complete</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          </Fragment>
        ))}
      </ul>

      <div></div>
    </>
  )
}

export default Todo
