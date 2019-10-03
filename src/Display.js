import React, { Component } from 'react'
import { connect } from 'react-redux'
import './display.scss'
class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: []
        }
    }
    genBox = () => this.props.messages_reducer.messages.map(msg => <div className="msg">{msg}</div>)

    render() {
        return (
            <div className="display">
                <div className="box">{this.genBox()}</div>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        messages_reducer: state.MessagesReducer,
    }
}

export default connect(mapStatetoProps, null)(Display)