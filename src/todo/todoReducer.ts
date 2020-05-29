import { omit } from 'lodash'
import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, PayloadTodo } from './todoActions'

export interface TodoState {
  todos: { [id: string]: PayloadTodo }
}

const initialState = {} as TodoState

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, [action.payload.id]: action.payload }

    case COMPLETE_TODO:
      return { ...state, [action.payload.id]: action.payload }

    case REMOVE_TODO:
      return omit(state, action.payload.id)

    default:
      return state
  }
}

export default todoReducer
