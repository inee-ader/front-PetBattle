import React from 'react';
import {BrowserRouter, withRouter} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './containers/Main';
const AllPets = "https://us.api.blizzard.com/data/wow/pet/index?namespace=static-us&locale=en_US&access_token=UStPv2EvG8484Obpzj05JECVDGdwwrW414"
const array = [39, 40, 42, 43, 44, 45, 46, 47, 49, 56, 72, 87, 89, 107, 126, 143, 192]
const accessToken= "USYUxs9l7kXKRaTLzAGHbwZ0D31UwhbFK6"
const BASEURL = 'http://localhost:3000'

class App extends React.Component {

  state = {
    currentUser: [],
    apiPets: [],
    page: "choose team",
    footerInfo: {},
    userID: "",
    team: [], 
    hoveredPet: {}
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
     .then(data => {
       console.log(data)
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

    console.log(this.state.team)

    this.createTeam()

    // create team pets with hp, dmg, abilities
    // create game
    // create boss

  }

  createTeam = () => {

    fetch(`${BASEURL}/newgame`, this.configPetObj() )
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
    })



  }

  configPetObj = () => {
    console.log(this.state.team)
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        team: this.state.team
      })
    }
  }


  render() {
    const {apiPets, team, hoveredPet, footerInfo, page} = this.state
    return (
      <div className="App">
        
        <header className="">
          <Header/>
        </header>
  
        <body className="">
        <BrowserRouter>
          <Main addPet={this.addPet} 
              removePet={this.removePet} 
              team={team} 
              pets={apiPets} 
              hoveredPet={hoveredPet} //state
              setHoveredPet={this.setHoveredPet}
              setUserIDState={this.setUserIDState}
              setAPIPetsState={this.setAPIPetsState}
              />
        </BrowserRouter>
        </body>
  
        <footer className="">
          <Footer info={footerInfo} page={page} handleClick={this.startBattle}/>
        </footer>
        
      </div>
    );
  }
}

export default App; 
