// Action types
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

// Action creators

export interface TodoItem {
  id: string
  text?: string
  completed?: boolean
  addedAt?: string
}

export const addTodo = (payload: TodoItem) => {
  return { type: ADD_TODO, payload }
}

export const completeTodo = (payload: TodoItem) => {
  return { type: COMPLETE_TODO, payload }
}

export const removeTodo = (payload: TodoItem) => {
  return { type: REMOVE_TODO, payload }
}
