import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
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
    page: "choose team",
    footerInfo: {},
    userID: "",
    team: [], 
    hoveredPet: {},
    currentGame: ""
  }

  componentDidMount() {
    
    // for(let i of array) {
    //   fetch(`https://us.api.blizzard.com/data/wow/pet/${i}?namespace=static-us&locale=en_US&access_token=${accessToken}`)
    //   .then(res => res.json())
    //   .then(data => {this.setState({
    //     apiPets: [...this.state.apiPets, data]
    //   })})
    // }

    // if (localStorage.getItem("jwt")) {
    //   fetch("http://localhost:3000/getUser", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": `Bearer ${localStorage.getItem("jwt")}`
    //     }
    //   })
    //   .then(resp => resp.json())
    //   .then(data => {
    //     console.log(data)
    //     // this.setState({currentUser: data.user})
    //   })
    // }

    // fetch(`${BASEURL}/users/${this.state.userID}`)
    // .then() // this fetches from our api

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
    // console.log(this.state.team)
    this.createGame(this.state.userID, this.state.team)
    // create team pets with hp, dmg, abilities
    // create game
    // create boss
  }
  
  createGame = (id, team) => {
    // console.log(id, team)
    // debugger
    fetch(`${BASEURL}/newgame`, this.configPetObj(id, team) )
    .then(resp => resp.json())
    .then(json => {
      // console.log(json)
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

  render() {
    const {pets, team, hoveredPet, footerInfo, page, userID, currentGame} = this.state
    return (
      <div className="App">
        
        <header className="header">
          <br/>
          <Header page={page} />
        </header>
  
        <body className="">
          <Main addPet={this.addPet} 
              removePet={this.removePet} 
              setPageState={this.setPageState}
              team={team} 
              pets={pets} 
              hoveredPet={hoveredPet} //state
              setHoveredPet={this.setHoveredPet}
              setUserIDState={this.setUserIDState}
              setAPIPetsState={this.setAPIPetsState}
              userID={userID}
              currentGame={currentGame}
              />
        </body>
  
        <footer className="">
          <Footer info={footerInfo} page={page} handleClick={this.startBattle} history={this.props.history} setPageState={this.setPageState}/>
        </footer>
        
      </div>
    );
  }
}

export default withRouter(App); 
