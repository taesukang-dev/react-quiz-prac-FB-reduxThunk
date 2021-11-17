import { useSelector } from 'react-redux'
import '../styles/result.scss'

const Result = () => {
  const state = useSelector((state) => state.quizReducer)
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
      <div>이 정도면 아주 친한 친구 사이! 앞으로도 더 친하게 지내요!</div>
      <div className="btn--wrapper">
        <button className="result--btn">점수보기</button>
        <button className="result--btn">랭킹보기</button>
      </div>
    </div>
  )
}

export default Result
