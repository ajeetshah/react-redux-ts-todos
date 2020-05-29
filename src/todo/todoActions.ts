// Action types
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

// Action creators

export interface PayloadTodo {
  id: string
  text?: string
  completed?: boolean
  addedAt?: string
}

export const addTodo = (payload: PayloadTodo) => {
  return { type: ADD_TODO, payload }
}

export const completeTodo = (payload: PayloadTodo) => {
  return { type: COMPLETE_TODO, payload }
}

export const removeTodo = (payload: PayloadTodo) => {
  return { type: REMOVE_TODO, payload }
}
