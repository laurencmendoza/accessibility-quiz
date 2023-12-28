import useDocumentTitle from '../useDocumentTitle'
import questions from '../questions.json'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

export default function Results() {
    useDocumentTitle(`Results - Accessibility Quiz`)
    

    return (
        <>
            <Link to="/">
                <AiFillHome className="home"/>
            </Link>
            <div className="card">
            </div>
        </>
    )
}
