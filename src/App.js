import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './containers/Main';
const AllPets = "https://us.api.blizzard.com/data/wow/pet/index?namespace=static-us&locale=en_US&access_token=USNsoR5gTkRt06wSa1Srk1NT89IdI1Zxqf"
const array = [49, 56, 58, 72, 87, 89, 93, 107, 114, 126, 143, 192, 200, 202, 400]

// 39, 40, 42, 43, 44, 45, 46, 47, removed pets so I have only 15 in the array

class App extends Component {

  state = {
    currentUser: [],
    apiPets: [],
    footerInfo: {},
    name: "",
    token: "", 
    team: [], 
    hoveredPet: {}
  }

  componentDidMount() {

    for(let i of array) {
      fetch(`https://us.api.blizzard.com/data/wow/pet/${i}?namespace=static-us&locale=en_US&access_token=USdYys3AH14l7tbBbPnA33komKEhZWqoKp`)
      .then(res => res.json())
      .then(data => {this.setState({
        apiPets: [...this.state.apiPets, data]
      })})
    }
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




  render() {

    const {apiPets, team, hoveredPet} = this.state

    return (
      <div className="App">
        <header className="">
          <Header/>
        </header>
  
        <body className="">
          <Main 
            addPet={this.addPet} 
            removePet={this.removePet} 
            team={team} 
            pets={apiPets} 
            hoveredPet={hoveredPet} //state
            setHoveredPet={this.setHoveredPet}
            />
        </body>
  
        <footer className="">
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
