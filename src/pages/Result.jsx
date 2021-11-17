import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { insertPointAndComment } from '../redux/modules/user'
import { useRef } from 'react'
import '../styles/result.scss'

const Result = ({ nowUser }) => {
  const state = useSelector((state) => state.quizReducer)
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let comment = useRef()
  let sum = 0

  state.filter((el) => {
    return el.a === el.uA ? (sum += 20) : sum
  })
  return (
    <div className="result--wrapper">
      <h1 className="result--title">
        <span className="hr">내친구 뇌브</span>에 대한 내 점수는?
      </h1>
      <h1 className="result--sum">
        <span className="hr">{sum}</span>
      </h1>
      <textarea
        ref={comment}
        className="textArea"
        placeholder="뇌브에게 격려의 한마디 해주세요"
      />
      <div className="btn--wrapper">
        <button
          className="result--btn"
          onClick={() => {
            dispatch(
              insertPointAndComment({
                id: nowUser,
                sum: sum,
                comment: comment.current.value,
              })
            )
            navigate('/rank')
          }}
        >
          남기고 랭킹보기
        </button>
      </div>
    </div>
  )
}

export default Result
