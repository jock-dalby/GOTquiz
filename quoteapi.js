request.get('https://api.got.show/api/characters/paths')
  .end((err, res)=> {
    if(err) return console.log(err)
    let allCharacters = []
    res.body.map((c) => { allCharacters.push(c.name) })
    this.setState({allCharacters: allCharacters})
    console.log('all characters', res.body[0].name)
    console.log(allCharacters)
  })
)
