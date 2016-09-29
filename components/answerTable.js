import React, { Component } from 'react'
import AnswerRow from './answerRow.js'

class AnswerTable extends Component {

  constructor (props) {
    super(props)
    }
    checkAnswer() {
      console.log("function works", this.props.characterAnswer)
    }

  render () {
    return (
      <div>
        <h1 onClick={this.checkAnswer.bind(this)}>a) {this.props.allCharacters[Math.floor(Math.random()*28)]}</h1>
        <h1 onClick={this.checkAnswer.bind(this)}>b) {this.props.allCharacters[Math.floor(Math.random()*28)]}</h1>
        <h1 onClick={this.checkAnswer.bind(this)}>c) {this.props.allCharacters[Math.floor(Math.random()*28)]}</h1>
        <h1 onClick={this.checkAnswer.bind(this)}>d) {this.props.characterAnswer}</h1>
      </div>
    )
  }

}

export default AnswerTable
