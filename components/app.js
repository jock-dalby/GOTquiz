import React, { Component } from 'react'
import request from 'superagent'

class App extends Component {

  constructor (props) {
    super(props)
  }
  componentDidMount(){
    return(
    request.get('https://got-quotes.herokuapp.com/quotes')
      .end((err, res)=> {
        if(err) return console.log(err)
        this.setState({quote: res.body.quote})
        this.setState({character: res.body.character})
        console.log(this.state.quote)
      }),
    request.get('https://api.got.show/api/characters/paths')
      .end((err, res)=> {
        if(err) return console.log(err)
        let allCharacters = res.body.map((c, i) => {return {name: c.name, index: i}})
        this.setState({allCharacters: allCharacters})
        console.log(res.body[0])
        console.log(allCharacters)
      })
    )
  }
  render () {
    return <h1>Welcome to {this.props.name}</h1>
  }

}

export default App
