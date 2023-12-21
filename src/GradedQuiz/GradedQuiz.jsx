import './GradedQuiz.css'
import useDocumentTitle from '../useDocumentTitle'
import questions from '../questions.json'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

export default function GradedQuiz() {
    const [count, setCount] = useState(0)
    const [A, setA] = useState()
    const [B, setB] = useState()
    const [C, setC] = useState()
    const [D, setD] = useState()
    const [answered, setAnswered] = useState(false)

    useDocumentTitle(`Question ${count+1} - Accessibility Quiz`)

    const questionsArr = [0,1,2,3,4,5,6,7,8,9]
    const answerArr = questions.map((question) => (question.answer))
    console.log(answerArr)

    function saveAnswer(input) {
        // needs to set answered to true
        // needs to show selected choice
        // needs to save user choices to array
        // needs to mark question as answered
        setAnswered(true)
        if (input === 'A') {
            setA('selected')
            setB('')
            setC('')
            setD('')
        } else if (input === 'B') {
            setA('')
            setB('selected')
            setC('')
            setD('')
        } else if (input === 'C') {
            setA('')
            setB('')
            setC('selected')
            setD('')
        } else {
            setA('')
            setB('')
            setC('')
            setD('selected')
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
            <Link to="/">
                <AiFillHome className="home"/>
            </Link>
            <div className="question-nav">
                {questionsArr.map((num)=> (
                <button key={num+1} onClick={()=> toNumber(num)}>{num+1}</button>
                ))}
            </div>
            <div className="card">
                <h1>Question #{count+1}</h1>
                <p>{questions[count].question}</p>
                <div className="options">
                    <button className={A} onClick={() => (saveAnswer('A'))}>{questions[count].optionA}</button>
                    <button className={B} onClick={() => (saveAnswer('B'))}>{questions[count].optionB}</button>
                    <button className={C} onClick={() => (saveAnswer('C'))}>{questions[count].optionC}</button>
                    <button className={D} onClick={() => (saveAnswer('D'))}>{questions[count].optionD}</button>
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
