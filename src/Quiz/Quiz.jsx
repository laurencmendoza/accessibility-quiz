import './Quiz.css'
import useDocumentTitle from '../useDocumentTitle'
import questions from '../questions.json'
import { useState } from 'react'

export default function Quiz() {
    const [count, setCount] = useState(0)

    useDocumentTitle(`Question ${count+1} - Accessibility Quiz`)

    return (
        <>
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
