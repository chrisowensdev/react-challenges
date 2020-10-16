import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import TextEditor from './components/TextEditor';

import './App.css';

function App() {
    return (
        <div className='App'>
            <Router>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/counter'>
                    <Counter />
                </Route>
                <Route path='/texteditor'>
                    <TextEditor />
                </Route>
            </Router>
        </div>
    );
}

export default App;
