import React, { Component } from 'react'
import './input.scss'
class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    handleInput = (event) => {
        let value = event.target.value
        this.setState({ value })
    }

    save = (event) => {
        let value = event.target.value
        if (value !== '' && event.charCode === 13) {
            console.log(value)
        }
    }


    render() {
        return (
            <div className="input">
                <input
                    value={this.state.value}
                    onChange={this.handleInput}
                    onKeyPress={this.save}
                />
            </div>
        )
    }
}
export default Input