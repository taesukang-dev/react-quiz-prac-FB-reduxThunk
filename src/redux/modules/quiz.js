// initial
const initialState = [
  { q: '드니 빌뇌브는 프랑스 사람이다.', a: '1', uA: '' },
  { q: '드니 빌뇌브는 미혼이다.', a: '0', uA: '' },
  { q: '드니 빌뇌브는 50살이 넘었다.', a: '1', uA: '' },
  { q: '드니 빌뇌브는 에일리언 감독이다.', a: '0', uA: '' },
  { q: '드니 빌뇌브는 배트맨을 좋아한다.', a: '1', uA: '' },
]

// Actions
const ANSWER = 'quize/ANSWER'

export function replyAnswer(answer) {
  return { type: ANSWER, answer }
}

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case ANSWER:
      let copied = [...state]
      copied[action.answer.id].uA = '' + action.answer.uA
      return copied
    default:
      return state
  }
}
