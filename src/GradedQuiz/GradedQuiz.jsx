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
    const [submitted, setSubmitted] = useState(false)

    const [score, setScore] = useState(0)

    useDocumentTitle(`Question ${count+1} - Accessibility Quiz`)

    // const questionsArr = [0,1,2,3,4,5,6,7,8,9]
    let initialAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    const [userAnswers, setUserAnswers] = useState(initialAnswers)

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
        console.log(nextAnswers)
        console.log(questions[count].answer)
        setAnswered(true)
        setUserAnswers(nextAnswers)
    }


    function next() {
        setCount(count+1)
        setAnswered(false)
        setA('')
        setB('')
        setC('')
        setD('')
        console.log(userAnswers[count])
        console.log(questions[count].answer)

        if (userAnswers[count] === questions[count].answer) {
            setScore(score +1)
        }

        console.log(score)
    }

    // function toNumber(input) {
    //     setCount(input)
    //     setA('')
    //     setB('')
    //     setC('')
    //     setD('')
    //     setAnswered(false)
    // }

    function showResults() {
        setSubmitted(true)

        if (userAnswers[count] === questions[count].answer) {
            setScore(score + 1)
        }

        console.log(score)
    }

    return (
        <>
            <Link to="/">
                <AiFillHome className="home"/>
            </Link>
            {/* <div className="question-nav">
                {questionsArr.map((num)=> (
                <button key={num+1} onClick={()=> toNumber(num)}>{num+1}</button>
                ))}
            </div> */}
            {!submitted ? 
            (<div className="card">
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
                <h1>Results</h1>
                <p className="score">Score: <span>{score}/10</span></p>
                    <div className="question-results">
                        {userAnswers.map((answer, idx)=> (
                            answer === questions[idx].answer ? 
                                (<p className="question-results-green" key={idx+1}>{idx+1}</p>) : 
                                (<p className="question-results-red" key={idx+1}>{idx+1}</p>)
                        
                        ))}
                    </div>
                
                <Link to="/">
                    <button className="return-btn">Return to Home</button>
                </Link>
            </div>)}
            
        </>
    )
}
