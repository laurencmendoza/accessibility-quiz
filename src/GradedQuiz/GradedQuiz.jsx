import './GradedQuiz.css'
import useDocumentTitle from '../useDocumentTitle'
import questions from '../questions.json'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs";

export default function GradedQuiz() {

    // count stores current question index, increments with the next button to move to the next question
    const [count, setCount] = useState(0)

    // stores selected class name when answer choice is clicked
    const [A, setA] = useState()
    const [B, setB] = useState()
    const [C, setC] = useState()
    const [D, setD] = useState()

    // stores boolean to toggle next button appearance
    const [answered, setAnswered] = useState(false)

    // stores boolean to toggle showing results and hiding questions
    const [submitted, setSubmitted] = useState(false)

    // stores number of questions answered correctly
    const [score, setScore] = useState(0)

    // controls title for page 
    useDocumentTitle(`Question ${count+1} - Accessibility Quiz`)

    // initial array to store answer choices
    let initialAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const [userAnswers, setUserAnswers] = useState(initialAnswers)

    // for map function to create buttons to each question
    // const questionsArr = [0,1,2,3,4,5,6,7,8,9]

    // stores answer choices, toggles selected classname when answer choice is selected, and toggles appearance of next button
    function handleAnswerClick(questionNo, answerInput) {
        const nextAnswers = userAnswers.map((c, i)=> {
            if (i === questionNo && answerInput === 'A') {
                return 'A'
            } else if (i === questionNo && answerInput === 'B') {
                return 'B'
            } else if (i === questionNo && answerInput === 'C') {
                return 'C'
            } else if (i === questionNo && answerInput === 'D') {
                return 'D'
            } else {
                return c
            }
        })

        if (answerInput === 'A') {
            setA('selected')
            setB('')
            setC('')
            setD('')
        } else if (answerInput === 'B') {
            setA('')
            setB('selected')
            setC('')
            setD('')
        } else if (answerInput === 'C') {
            setA('')
            setB('')
            setC('selected')
            setD('')
        } else if (answerInput === 'D') {
            setA('')
            setB('')
            setC('')
            setD('selected')
        }
        setAnswered(true)
        setUserAnswers(nextAnswers)
    }

    // handles change to next question, resets selected answer and calculates score
    function next() {
        setCount(count+1)
        setAnswered(false)
        setA('')
        setB('')
        setC('')
        setD('')

        if (userAnswers[count] === questions[count].answer) {
            setScore(score +1)
        }
    }

    // handles jump to different questions in map function
    // function toNumber(input) {
    //     setCount(input)
    //     setA('')
    //     setB('')
    //     setC('')
    //     setD('')
    //     setAnswered(false)
    // }

    // hides question card and shows results, calculates score
    function showResults() {
        setSubmitted(true)

        if (userAnswers[count] === questions[count].answer) {
            setScore(score + 1)
        }
    }

    return (
        <>
            {/* Home button */}
            <Link to="/">
                <AiFillHome className="home"/>
            </Link>

            {/* buttons to skip to different question numbers */}
            {/* <div className="question-nav">
                {questionsArr.map((num)=> (
                <button key={num+1} onClick={()=> toNumber(num)}>{num+1}</button>
                ))}
            </div> */}

            {!submitted ? 
            (<div className="card">
                {/* Displays questions and answer choices */}
                <h1>Question #{count+1}</h1>
                <p>{questions[count].question}</p>
                <div className="options">
                    <button className={A} onClick={() => (handleAnswerClick(count, 'A'))}>{questions[count].optionA}</button>
                    <button className={B} onClick={() => (handleAnswerClick(count, 'B'))}>{questions[count].optionB}</button>
                    <button className={C} onClick={() => (handleAnswerClick(count, 'C'))}>{questions[count].optionC}</button>
                    <button className={D} onClick={() => (handleAnswerClick(count, 'D'))}>{questions[count].optionD}</button>
                </div>
                <div className="button-div">
                    { answered && (
                        count < 9 ? (
                            <button onClick={next}>Next</button>
                        ) : (
                            <button onClick={showResults}>Submit</button>
                        )
                    )}
                </div>
            </div>) : 
            (<div className="card">
                {/* Shows results */}
                <h1>Results</h1>
                <p className="score">Score: <span>{score}/10</span></p>
                <div className="question-results">
                    {userAnswers.map((answer, idx)=> (
                        answer === questions[idx].answer ? 
                            (<div className="question-result">
                                <p className="question-results-green" key={idx+1}>{idx+1}</p>
                                <BsFillCheckCircleFill className="circle" aria-label="correct"/>
                            </div>
                            ) : 
                            (<div className="question-result">
                                <p className="question-results-red" key={idx+1}>{idx+1}</p>
                                <BsXCircleFill className="circle" aria-label="incorrect"/>
                            </div>)
                    ))}
                </div>
                <Link to="/">
                    <button className="return-btn">Return to Home</button>
                </Link>
            </div>)}
            
        </>
    )
}
