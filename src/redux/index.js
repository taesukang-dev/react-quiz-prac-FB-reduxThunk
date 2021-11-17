import { combineReducers, createStore } from 'redux'
import userReducer from './modules/user'
import quizReducer from './modules/quiz'
const rootReducer = combineReducers({ userReducer, quizReducer })
const store = createStore(rootReducer)
export default store
