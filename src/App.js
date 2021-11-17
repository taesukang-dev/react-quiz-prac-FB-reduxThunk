import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import Start from './components/Start'
import Quiz from './pages/Quiz'
import NotFound from './pages/NotFound'
import Result from './pages/Result'
import Rank from './pages/Rank'

const App = () => {
  let [nowUser, setNowUser] = useState('')
  return (
    <Routes>
      <Route
        path="/"
        element={<Start nowUser={nowUser} setNowUser={setNowUser} />}
      />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/result" element={<Result nowUser={nowUser} />} />
      <Route path="/rank" element={<Rank />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App
