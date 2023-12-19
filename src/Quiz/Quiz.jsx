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
