import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'

import Start from './components/Start'
import Quiz from './pages/Quiz'
import NotFound from './pages/NotFound'
import Result from './pages/Result'
import Rank from './pages/Rank'
import { useDispatch } from 'react-redux'
import { loadQuizFB } from './redux/modules/quiz'
const App = () => {
  let [nowUser, setNowUser] = useState('')
  let [answer, setAnswer] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadQuizFB())
  })

  return (
    <Routes>
      <Route
        path="/"
        element={<Start nowUser={nowUser} setNowUser={setNowUser} />}
      />
      <Route
        path="/quiz/:id"
        element={<Quiz answer={answer} setAnswer={setAnswer} />}
      />
      <Route
        path="/result"
        element={<Result answer={answer} nowUser={nowUser} />}
      />
      <Route path="/rank" element={<Rank />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App
