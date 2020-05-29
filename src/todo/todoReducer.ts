import { omit } from 'lodash'
import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, TodoItem } from './todoActions'

export interface TodoState {
  [id: string]: TodoItem
}

const initialState = {} as TodoState

const todoReducer = (state: TodoState = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, [action.payload.id]: action.payload }

    case COMPLETE_TODO:
      const id = action.payload.id
      return { ...state, [id]: { ...state[id], completed: true } }

    case REMOVE_TODO:
      return omit(state, action.payload.id)

    default:
      return state
  }
}

export default todoReducer
