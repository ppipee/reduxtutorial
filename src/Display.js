import React, { Component } from 'react'
import './display.scss'
class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [
                "msg1",
                "msg2",
                "msg3",
            ]
        }
    }
    genBox = () => this.state.messages.map(msg => <div className="msg">{msg}</div>)

    render() {
        return (
            <div className="display">
                <div className="box">{this.genBox()}</div>
            </div>
        )
    }
}
export default Display