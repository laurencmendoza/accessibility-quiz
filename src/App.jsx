import { Route, Routes } from "react-router-dom"

import './App.css'
import Home from './Home/Home'
import Quiz from './Quiz/Quiz'

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/quiz" element={<Quiz/>} />
      </Routes>
    </div>
  )
}

export default App
