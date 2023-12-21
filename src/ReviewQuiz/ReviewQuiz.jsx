import './ReviewQuiz.css'
import useDocumentTitle from '../useDocumentTitle'
import questions from '../questions.json'
import { useState } from 'react'

export default function Quiz() {
    const [count, setCount] = useState(0)
    const [A, setA] = useState()
    const [B, setB] = useState()
    const [C, setC] = useState()
    const [D, setD] = useState()
    const [answered, setAnswered] = useState(false)

    useDocumentTitle(`Question ${count+1} - Accessibility Quiz`)

    const questionsArr = [0,1,2,3,4,5,6,7,8,9]

    function checkAnswer(input) {
        if (input === questions[count].answer && !answered) {
            if (questions[count].answer === 'A') {
                setA('correct')
                setB('incorrect')
                setC('incorrect')
                setD('incorrect')
            } else if (questions[count].answer === 'B') {
                setA('incorrect')
                setB('correct')
                setC('incorrect')
                setD('incorrect')
            } else if (questions[count].answer === 'C') {
                setA('incorrect')
                setB('incorrect')
                setC('correct')
                setD('incorrect')
            } else {
                setA('incorrect')
                setB('incorrect')
                setC('incorrect')
                setD('correct')
            }
            setAnswered(true)
        } else if (input !== questions[count].answer) {
            if (input === 'A') {
                setA('incorrect')
            } else if (input === 'B') {
                setB('incorrect') 
            } else if (input === 'C') {
                setC('incorrect') 
            } else {
                setD('incorrect')
            }
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