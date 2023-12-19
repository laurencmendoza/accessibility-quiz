import './Home.css';
import useDocumentTitle from '../useDocumentTitle'
import { Link } from 'react-router-dom';

export default function Home() {
    useDocumentTitle('Accessibility Quiz')
    
    return (
        <>
            <div className="card">
                <h1>Web Accessibility Quiz</h1>
                <p>This quiz covers some of the fundamentals of the W3C Web Content Accessibility Guidelines (WCAG)</p>
                <Link to="/quiz">
                    <button class="start-btn">START QUIZ</button>
                </Link>
            </div>
        </>
    )
    
}