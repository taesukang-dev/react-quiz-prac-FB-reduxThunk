import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'

// initial
const initialState = []

// Actions
const ANSWER = 'quiz/ANSWER'
const LOAD = 'quiz/LOAD'

export function loadQuiz(quiz_list) {
  return { type: LOAD, quiz_list }
}

// middlewares
export const loadQuizFB = () => {
  return async function (dispatch) {
    const quiz_data = await getDocs(collection(db, 'quiz'))

    let quiz_list = []

    quiz_data.forEach((el) => {
      quiz_list.push(el.data())
    })
    dispatch(loadQuiz(quiz_list))
  }
}

export function replyAnswer(answer) {
  return { type: ANSWER, answer }
}

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case ANSWER:
      let copied = [...state]
      copied[action.answer.id].uA = '' + action.answer.uA
      return copied
    case LOAD:
      return action.quiz_list
    default:
      return state
  }
}
