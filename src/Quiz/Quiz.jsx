import './Quiz.css'
import useDocumentTitle from '../useDocumentTitle'
import questions from '../questions.json'
import { useState } from 'react'

export default function Quiz() {
    const [count, setCount] = useState(0)

    useDocumentTitle(`Question ${count+1} - Accessibility Quiz`)

    return (
        <>
            <div class="question-nav">
                <button onClick={()=> setCount(0)}>1</button>
                <button onClick={()=> setCount(1)}>2</button>
                <button onClick={()=> setCount(2)}>3</button>
                <button onClick={()=> setCount(3)}>4</button>
                <button onClick={()=> setCount(4)}>5</button>
                <button onClick={()=> setCount(5)}>6</button>
                <button onClick={()=> setCount(6)}>7</button>
                <button onClick={()=> setCount(7)}>8</button>
                <button onClick={()=> setCount(8)}>9</button>
                <button onClick={()=> setCount(9)}>10</button>
            </div>
            <div className="card">
                <h1>Question #{count+1}</h1>
                <p>{questions[count].question}</p>
                <div class="options">
                    <button>{questions[count].optionA}</button>
                    <button>{questions[count].optionB}</button>
                    <button>{questions[count].optionC}</button>
                    <button>{questions[count].optionD}</button>
                </div>
                {count < 9 ? (
                    <button onClick={() => setCount(count+1)}>Next</button>
                ) : (
                    <button>Submit</button>
                )
                }
            </div>
        </>
    )
}
