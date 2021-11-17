import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { replyAnswer } from '../redux/modules/quiz'
import '../styles/quiz.scss'

const Quiz = () => {
  const state = useSelector((state) => state.quizReducer)
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <div className="quiz--wrapper">
      <h1 className="quiz--title">{+id + 1}번째 문제</h1>
      <div className="quiz--sub">{state[id].q}</div>
      <div className="btn--wrapper">
        <button
          className="btn"
          onClick={() => {
            dispatch(replyAnswer({ id: id, uA: 1 }))
            if (+id === 4) {
              navigate('/result')
            } else {
              navigate(`/quiz/${+id + 1}`)
            }
          }}
        >
          O
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch(replyAnswer({ id: id, uA: 0 }))
            if (+id === 4) {
              navigate('/result')
            } else {
              navigate(`/quiz/${+id + 1}`)
            }
          }}
        >
          X
        </button>
      </div>
    </div>
  )
}

export default Quiz
