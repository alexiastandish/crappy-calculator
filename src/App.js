import React, { Component } from 'react'
import './App.css'
import Solution from './components/Solution'
import Dropdown from './components/Dropdown'

class App extends Component {
  constructor() {
    super()

    this.state = {
      userinputOne: null,
      userinputTwo: null,
      selectedOperation: '',
      answer: null,
    }

    this.updateSelectedOperation = this.updateSelectedOperation.bind(this)
  }

  handleChangeOne(val) {
    this.setState({ userinputOne: Number(val) }, this.updateAnswer)
  }

  handleChangeTwo(val) {
    this.setState({ userinputTwo: Number(val) }, this.updateAnswer)
  }

  updateSelectedOperation(value) {
    this.setState({ selectedOperation: value }, this.updateAnswer)
  }

  updateAnswer() {
    const { userinputOne, userinputTwo, selectedOperation } = this.state
    const addAnswer = userinputOne + userinputTwo
    const subtractAnswer = userinputOne - userinputTwo
    const multiplyAnswer = userinputOne * userinputTwo
    const divideAnswer = userinputOne / userinputTwo
    if (selectedOperation === 'add') {
      this.setState({ answer: addAnswer })
    }
    if (selectedOperation === 'subtract') {
      this.setState({ answer: subtractAnswer })
    }
    if (selectedOperation === 'multiply') {
      this.setState({ answer: multiplyAnswer })
    }
    if (selectedOperation === 'divide') {
      this.setState({ answer: divideAnswer })
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="header">
          Happy <br />
          Crappy
          <br /> Calculating
        </h1>
        <div className="right-side">
          <Dropdown onSelect={this.updateSelectedOperation} />
          <input
            type="number"
            placeholder="Enter First Number"
            // value={this.state.userinputOne}
            onChange={event => this.handleChangeOne(event.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Second Number"
            // value={this.state.userinputTwo}
            onChange={event => this.handleChangeTwo(event.target.value)}
          />
          <Solution answer={this.state.answer} />
        </div>
      </div>
    )
  }
}

export default App
