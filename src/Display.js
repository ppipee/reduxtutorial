import React, { Component } from 'react'
import './display.scss'
import { Title } from './style'

class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Title>Hello World</Title>
            </div>
        )
    }
}
export default Display