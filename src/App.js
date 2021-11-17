import React from 'react'
import { Route, Routes } from 'react-router'
import Start from './components/Start'
import Quiz from './pages/Quiz'
import NotFound from './pages/NotFound'
import Result from './pages/Result'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App
