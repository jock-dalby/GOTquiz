import React, { Component } from 'react'

class Quote extends Component {

  constructor (props) {
    super(props)
    console.log('quote', this.props)
  }

  render () {
    return <h1>"{this.props.newQuote}"</h1>
  }

}

export default Quote
