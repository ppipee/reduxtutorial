import React, { Component } from 'react';
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