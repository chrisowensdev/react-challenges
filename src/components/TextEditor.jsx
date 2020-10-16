import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TextEditor extends Component {
    state = {
        input: "",
        text: []
    }

    _handleInput = newInput => {
        this.setState({
            input: newInput
        })
    }

    _appendText = () => {
        this.setState({
            input: "",
            text: [...this.state.text, this.state.input]
        })
    }

    _undoText = () => {
        let newText = [...this.state.text];
        newText.pop()
        this.setState({
            text: newText
        })
    }

    render() {
        return (
            <>
            <Link to="/">Home</Link>
            <h1>Text Editor</h1>
            <input 
                type="text" 
                onChange={event => this._handleInput(event.target.value)}
                value={this.state.input} 
            />
            <button type="button" onClick={this._appendText}>Append</button>
            <button type="button" onClick={this._undoText}>Undo</button>
            <p>{this.state.text.join(" ")}</p>
            </>
        )
    }
}

export default TextEditor;