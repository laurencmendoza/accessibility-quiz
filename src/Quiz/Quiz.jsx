import './Quiz.css'
import useDocumentTitle from '../useDocumentTitle'
import questions from '../questions.json'

export default function Quiz() {
    useDocumentTitle('Accessibility Quiz - Question 1')

    return (
        <>
            <div className="card">
                <h1>Question #1</h1>
                <p>{questions[0].question}</p>
            </div>
        </>
    )
}
