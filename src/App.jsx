import { Route, Routes } from "react-router-dom"

import './App.css'
import Home from './Home/Home'
import Quiz from './ReviewQuiz/ReviewQuiz'
import GradedQuiz from './GradedQuiz/GradedQuiz'
import Results from './Results/Results'

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/quiz/review" element={<Quiz/>}/>
        <Route path="/quiz/graded" element={<GradedQuiz/>}/>
        <Route path="/quiz/graded/results" element={<Results/>}/>
      </Routes>
    </div>
  )
}

export default App
