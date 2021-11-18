import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './modules/user'
import quizReducer from './modules/quiz'

const middlewares = [thunk]
const enhancer = applyMiddleware(...middlewares)
const rootReducer = combineReducers({ userReducer, quizReducer })

const store = createStore(rootReducer, enhancer)
export default store
