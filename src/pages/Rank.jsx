import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { allUserFB } from '../redux/modules/user'
import '../styles/rank.scss'

const Rank = () => {
  let state = useSelector((state) => state.userReducer)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(allUserFB())
  }, [])
  return (
    <div className="rank--wrapper">
      <div className="rank--header">
        <span className="rank--hr">{state.length}</span> 명의 사람 중에 당신은?!
      </div>
      {state.map((el, i) => {
        return (
          <div className="rank--card" key={el.id}>
            <h2 className="rank--hight">{i + 1}등</h2>
            <div className="rank--title">
              <div className="rank--name">{el.name}</div>
              <div className="rank--text">{el.comment}</div>
            </div>
          </div>
        )
      })}
      <div className="rank--btnwrapper">
        <button className="rank--btn">다시하기</button>
      </div>
    </div>
  )
}

export default Rank
