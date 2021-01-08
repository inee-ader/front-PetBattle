import React from 'react';
import {withRouter} from 'react-router-dom'
// import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './containers/Main';
const BASEURL = 'http://localhost:3000'

class App extends React.Component {
  state = {
    currentUser: [],
    pets: [],
    page: "login",
    footerInfo: {},
    userID: "",
    team: [], 
    hoveredPet: {},
    currentGame: "",
    attackingPetMoves: {},
    battleButtonPressed: ""
  }
 
  setAttackingPetMoves = (attackingPetMoves) => {
    this.setState({
      attackingPetMoves: attackingPetMoves
    })
  }

  setUserIDState = (id) => {
    this.setState({userID: id })
  }

  setAPIPetsState = () => { 
     fetch(`${BASEURL}/users/${this.state.userID}`)
     .then(resp => resp.json())
     .then(data => {this.setState({
       pets: data.pets
     })
    })
  }

  addPet = (pet) => {
    if(this.state.team.length===3){return}
    if(!this.state.team.includes(pet)){
        this.setState(prevState=>{
        return{
          team:[...prevState.team, pet]
        }
      })
    }
  }

  removePet = (pet) => {
    this.setState(prevState=> ({
      team: prevState.team.filter(petItem => petItem !== pet)
    }))
  } 

  setHoveredPet = (pet) => {
    this.setState({hoveredPet: pet})
  }

  startBattle = () => {
    this.createGame(this.state.userID, this.state.team)
  }
  
  createGame = (id, team) => {
    fetch(`${BASEURL}/newgame`, this.configPetObj(id, team) )
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        currentGame: json.id
      })
    }).then(() => {this.props.history.push("/battle")})     
  }

  configPetObj = (id, team) => {
   
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        team: team
      })
    }
  }

  setPageState = (page) => {
    this.setState({
      page: page
    })
  }

  setBattleButtonState = (buttonName) => {
    this.setState({
      battleButtonPressed:buttonName
    })
  }

  setAppMovesState = (pet) => {
    this.setState({
      attackingPetMoves: pet
    })
  }

  clearTeamState = () => {
    this.setState({team: []})
  }

  render() {
    const {pets, team, hoveredPet, footerInfo, page, userID, currentGame, battleButtonPressed} = this.state
    return (
      <div className="App">
        
        <header className="header">
          <br/>
          <Header page={page} />
        </header>
  
        <div className="">
          <Main addPet={this.addPet} 
              removePet={this.removePet} 
              setPageState={this.setPageState}
              clearTeamState={this.clearTeamState}
              page={page}
              team={team} 
              pets={pets} 
              hoveredPet={hoveredPet} //state
              setHoveredPet={this.setHoveredPet}
              setUserIDState={this.setUserIDState}
              setAPIPetsState={this.setAPIPetsState}
              userID={userID}
              currentGame={currentGame}
              setAttackingPetMoves={this.setAttackingPetMoves}
              battleButtonPressed={battleButtonPressed}
              setBattleButtonState={this.setBattleButtonState}
              setAppMovesState={this.setAppMovesState}
              />
        </div>
         {/* Object.keys(obj).length === 0 && obj.constructor === Object */}
        
        <footer className="">
          <Footer info={footerInfo} page={page} handleClick={this.startBattle} history={this.props.history} setPageState={this.setPageState} attackingPetMoves={this.state.attackingPetMoves}
          setBattleButtonState={this.setBattleButtonState}
          />
        </footer>
        
      </div>
    );
  }
}

export default withRouter(App); 

// attackingPetMoves={Object.keys(this.state.attackingPetMoves).length === 0 && this.state.attackingPetMoves.constructor === Object ? this.state.attackingPetMoves : null}

