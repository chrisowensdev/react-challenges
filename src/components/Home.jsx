import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Challenges</h1>
            <ul>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/texteditor">Text Editor</Link></li>
            </ul>
            
            
        </div>
    )
}

export default Home
