import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { insertPointAndCommentFB } from '../redux/modules/user'
import { useRef } from 'react'
import '../styles/result.scss'

const Result = ({ nowUser, answer }) => {
  const state = useSelector((state) => state.quizReducer)
  const user = useSelector((state) => state.userReducer)
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let comment = useRef()
  let sum = 0
  let userId = user.map((el) => {
    if (el.name === nowUser) {
      return el.id
    }
  })

  state.filter((el, i) => {
    return +el.a === answer[i] ? (sum += 20) : sum
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
              insertPointAndCommentFB({
                id: userId.toString(),
                name: nowUser,
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
