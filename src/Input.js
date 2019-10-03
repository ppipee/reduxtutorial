import React, { Component } from 'react'
import './input.scss'
import { connect } from 'react-redux'
import ActionsName from './action'
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
            let { messages } = this.props.messages_reducer
            let new_messages = [...messages, value]
            this.props.pon(new_messages)
            this.setState({ value: "" })
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

const mapStatetoProps = state => {
    return {
        messages_reducer: state.MessagesReducer,
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        pon: new_messages => dispatch({
            type: ActionsName.SAVE,
            new_messages,
        })
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Input)