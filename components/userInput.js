import React, { Component } from 'react'

class UserInput extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <h1>Welcome to {this.props.name}</h1>
  }

}

export default UserInput
