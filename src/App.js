import React, { Component } from 'react';
import { Title } from './style'
import Note from './Input'
import Display from './Display'

class App extends Component {
  render() {
    return (
      <>
        <Display />
        <Note />
      </>

    )
  }
}

export default App;