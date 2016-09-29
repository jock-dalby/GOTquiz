import React, { Component } from 'react'

class AnswerRow extends Component {

  constructor (props) {
    super(props)
    console.log('answerRow', this.props)
  }


  render () {
    return (
      <div>
        <h1>Was it</h1>
        <p></p>
      </div>
    )
  }

}

export default AnswerRow
