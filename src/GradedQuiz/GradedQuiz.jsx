import './GradedQuiz.css'
import useDocumentTitle from '../useDocumentTitle'
import questions from '../questions.json'
import { useState } from 'react'

export default function GradedQuiz() {
    const [count, setCount] = useState(0)
    const [A, setA] = useState()
    const [B, setB] = useState()
    const [C, setC] = useState()
    const [D, setD] = useState()
    const [answered, setAnswered] = useState(false)
    const [score, setScore] = useState(0)

    useDocumentTitle(`Question ${count+1} - Accessibility Quiz`)

    const questionsArr = [0,1,2,3,4,5,6,7,8,9]

    function checkAnswer(input) {
        setAnswered(true)
        if (input === questions[count].answer) {
            setScore(score+1)
        }
    }

    function next() {
        setCount(count+1)
        setAnswered(false)
        setA('')
        setB('')
        setC('')
        setD('')
    }

    function toNumber(input) {
        setCount(input)
        setA('')
        setB('')
        setC('')
        setD('')
        setAnswered(false)
    }

    return (
        <>
            <div class="question-nav">
                {questionsArr.map((num)=> (
                <button onClick={()=> toNumber(num)}>{num+1}</button>
                ))}
            </div>
            <div className="card">
                <p>Score: {score}</p>
                <h1>Question #{count+1}</h1>
                <p>{questions[count].question}</p>
                <div class="options">
                    <button className={A} onClick={() => (checkAnswer('A'))}>{questions[count].optionA}</button>
                    <button className={B} onClick={() => (checkAnswer('B'))}>{questions[count].optionB}</button>
                    <button className={C} onClick={() => (checkAnswer('C'))}>{questions[count].optionC}</button>
                    <button className={D} onClick={() => (checkAnswer('D'))}>{questions[count].optionD}</button>
                </div>
                { answered && 
                (
                    count < 9 ? (
                        <button onClick={next}>Next</button>
                    ) : (
                        <button>Submit</button>
                    )
                )}
                {
                }
            </div>
        </>
    )
}
