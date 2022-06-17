import React, { Component } from 'react';

/**
 *🏆
 * The goal of this exercise is to get you more familiar with event handling
 * in React. Here we would render an input element and add function to handle
 * events on that input element
 */
class FancyInput extends Component {
    constructor(props) {
        super(props);
        /**
         * 💡 Here we have initialized the state with inputValue
         */
        this.state = {
            inputValue: ''
        }

        /**
         * ✏️ 
         * Need to bind the handleChange function to appropriate `this`
         */
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * ✏️ 
     * Need to get the value of the input and set it to the state
     * 🧭  Get the value of the input from the synthetic event
     *     You can get the value by using event.target.value.
     * 🧭  Set the value to the state `inputValue` by calling `setState`
     */
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    render() {

        return (
            <React.Fragment>
                <input onChange={this.handleChange} value={this.state.inputValue}></input>
                <div>You typed: {this.state.inputValue}</div>
            </React.Fragment>

        )
    }
}

/**
 * 🚨 🚨 DO NOT DELETE OR CHANGE THIS.🚨 🚨
 * This is how you would use your above component
 * The output of this code is displayed on the browser on the left hand side
 */
const Usage = (props) => {
    return <FancyInput />
}

export default Usage;