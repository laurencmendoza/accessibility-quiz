import './ReviewQuiz.css'
import useDocumentTitle from '../useDocumentTitle'
import questions from '../questions.json'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs";

export default function Quiz() {

    // count stores current question index, increments with the next button to move to the next question
    const [count, setCount] = useState(0)

    // stores class name when answer is selected to show whether answer is correct or incorrect
    const [A, setA] = useState()
    const [B, setB] = useState()
    const [C, setC] = useState()
    const [D, setD] = useState()

    // stores boolean to toggle next button appearance
    const [answered, setAnswered] = useState(false)

    // controls title for page 
    useDocumentTitle(`Question ${count+1} - Accessibility Quiz`)

    // displays answer choice as correct or incorrect once the answer is selected
    // TO DO: need to show whether answer is correct or incorrect beyond color cue
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

    // handles change to next question, resets selected answer and calculates score
    function next() {
        setCount(count+1)
        setAnswered(false)
        setA('')
        setB('')
        setC('')
        setD('')
    }

    return (
        <>
            {/* Home button */}
            <Link to="/">
                <AiFillHome className="home" aria-label="home"/>
            </Link>

            <div className="card">
                <h1>Question #{count+1}</h1>
                <p>{questions[count].question}</p>
                <div className="options">
                    {/* each button has conditionals to add check or x depending on whether answer is correct or incorrect */}
                    <button className={A} onClick={() => (checkAnswer('A'))}>
                        {A === 'correct' && (<div className="answer-feedback"><BsFillCheckCircleFill aria-label="correct"/></div>)}
                        {A === 'incorrect' && (<div className="answer-feedback"><BsXCircleFill aria-label="incorrect"/></div>)}
                        {questions[count].optionA}
                    </button>
                    <button className={B} onClick={() => (checkAnswer('B'))}>
                        {B === 'correct' && (<div className="answer-feedback"><BsFillCheckCircleFill aria-label="correct"/></div>)}
                        {B === 'incorrect' && (<div className="answer-feedback"><BsXCircleFill aria-label="incorrect"/></div>)}
                        {questions[count].optionB}
                    </button>
                    <button className={C} onClick={() => (checkAnswer('C'))}>
                        {C === 'correct' && (<div className="answer-feedback"><BsFillCheckCircleFill aria-label="correct"/></div>)}
                        {C === 'incorrect' && (<div className="answer-feedback"><BsXCircleFill aria-label="incorrect"/></div>)}
                        {questions[count].optionC}
                    </button>
                    <button className={D} onClick={() => (checkAnswer('D'))}>
                        {D === 'correct' && (<div className="answer-feedback"><BsFillCheckCircleFill aria-label="correct"/></div>)}
                        {D === 'incorrect' && (<div className="answer-feedback"><BsXCircleFill aria-label="incorrect"/></div>)}
                        {questions[count].optionD}
                        </button>
                </div>
                <div className="button-div">
                    { answered && 
                    (
                        count < 9 ? (
                            <button onClick={next}>Next</button>
                        ) : (
                            <Link to="/">
                            <button>Finish</button>
                            </Link>
                        )
                    )}
                </div>
            </div>
        </>
    )
}
