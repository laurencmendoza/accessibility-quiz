import './Home.css';
import useDocumentTitle from '../useDocumentTitle'
import { Link } from 'react-router-dom';

export default function Home() {
    useDocumentTitle('Accessibility Quiz')
    
    return (
        <>
            <div className="card">
                <h1>Web Accessibility Quiz</h1>
                <p>This quiz covers some of the fundamentals of the W3C Web Content Accessibility Guidelines (WCAG). </p>
                <p>Take the <span className="review">review quiz</span> to review your knowledge and get immediate feedback on each answer.</p>
                <p>Take the <span className="graded">graded quiz</span> to assess what you know. Your score will be revealed once you have completed the quiz.</p>
                <Link to="/quiz/review">
                    <button class="review-btn">REVIEW QUIZ</button>
                </Link>
                <Link to="/quiz/graded">
                    <button class="graded-btn">GRADED QUIZ</button>
                </Link>
            </div>
        </>
    )
    
}