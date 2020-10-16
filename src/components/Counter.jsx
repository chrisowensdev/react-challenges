import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin: 5px;
    padding: 5px;
    width: 50px;
`;


class Counter extends Component {
    state = {
        counter: 0
    }

    _addClick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    _subtractClick = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
    return (
        <>
            <h1>Counter</h1>
            <h1>{this.state.counter}</h1>
            <Button type="button" onClick={this._subtractClick}>-</Button>
            <Button type="button" onClick={this._addClick}>+</Button>

        </>
    )
    };
};

export default Counter;