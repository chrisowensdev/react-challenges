import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Challenges</h1>
            <Link to="/counter">Counter</Link>
        </div>
    )
}

export default Home
