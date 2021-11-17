import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import styled from 'styled-components'
import { replyAnswer } from '../redux/modules/quiz'
import '../styles/quiz.scss'

const Quiz = () => {
  const state = useSelector((state) => state.quizReducer)
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <div className="quiz--wrapper">
      <ProgressForm>
        <ProgressBar width={((Number(id) + 1) / state.length) * 100 + '%'} />
        <ProgressHL />
      </ProgressForm>
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

const ProgressForm = styled.div`
  width: 300px;
  height: 30px;
  background-color: #ddd;
  border-radius: 20px;
  display: flex;
  align-items: center;
`
const ProgressBar = styled.div`
  border-radius: 20px;
  width: ${(props) => props.width};
  height: 30px;
  transition: 1s;
  background-color: red;
`
const ProgressHL = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: 3px dashed red;
  margin: 0 0 0 -20px;
`

export default Quiz
