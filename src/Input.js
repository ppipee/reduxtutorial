import React, { Component } from 'react'
import './input.scss'
class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    handleInput = (e) => {
        let value = e.target.value
        this.setState({ value })
    }

    render() {
        return (
            <div className="input">
                <input onChange={this.handleInput} value={this.state.value} />
            </div>
        )
    }
}
export default Input