import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import todoReducer, { TodoState } from '../todo/todoReducer'

export interface StoreState {
  todo: TodoState
}

const combinedReducer = combineReducers({
  todo: todoReducer,
  // more reducers here
})

const store = createStore(combinedReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
