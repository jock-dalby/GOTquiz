import React, { Component } from 'react'
import request from 'superagent'
import Quote from './quote.js'
import AnswerTable from './answerTable.js'

class App extends Component {

  constructor (props) {
    super(props)
    this.state= {
      newQuote: "Fetching quote..................",
      characterAnswer: "",
      allCharacters: ["Eddard Stark", "Bran Stark", "Catelyn Stark", "Tywin Lannister", "Robb Stark", "Sansa Stark", "Arya Stark", "Rickon Stark", "Jon Snow", "Daenerys Targaryen", "Jaime Lannister", "Cersei Lannister", "Tyrion Lannister", "Drogo", "Viserys Targaryen", "Joffrey Baratheon", "Myrcella Baratheon", "Tommen Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Theon Greyjoy", "Asha Greyjoy", "Victarion Greyjoy", "Brienne of Tarth", "Davos Seaworth", "Samwell Tarly", "Petyr Baelish"]
    }
  }
  componentDidMount(){
    request.get('https://got-quotes.herokuapp.com/quotes')
    .end((err, res)=> {
      if(err) return console.log(err)
      this.setState({newQuote: res.body.quote})
      this.setState({characterAnswer: res.body.character})
      console.log(res.body.character)
    })
  }
  render () {
    return (
      <div>
        <h1>Welcome to the Game of Thrones whodunnit!</h1>
        <h3>Who said ......</h3>
        <Quote newQuote={this.state.newQuote} />
        <AnswerTable allCharacters={this.state.allCharacters} characterAnswer={this.state.characterAnswer} />
      </div>
    )
  }

}

export default App
