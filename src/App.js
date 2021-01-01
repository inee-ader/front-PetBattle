import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './containers/Main';
const AllPets = "https://us.api.blizzard.com/data/wow/pet/index?namespace=static-us&locale=en_US&access_token=USNsoR5gTkRt06wSa1Srk1NT89IdI1Zxqf"
const array = [49, 56, 58, 72, 87, 89, 93, 107, 114, 126, 143, 192, 200, 202, 400]

// 39, 40, 42, 43, 44, 45, 46, 47, removed pets so I could have only 15 in the array

class App extends Component {

  state = {
    currentUser: [],
    apiPets: [],
    footerInfo: {},
    name: "",
    token: "", 
    team: ["hello"], 
    hoveredPet: {}
  }

  componentDidMount() {
    // fetch(AllPets)
    // .then(res => res.json())
    // .then(console.log)

    // fetch("https://us.api.blizzard.com/data/wow/pet/142?namespace=static-us&locale=en_US&access_token=UStPv2EvG8484Obpzj05JECVDGdwwrW414")
    // .then(res=> res.json())
    // .then(data => console.log(data))

    for(let i of array) {
      fetch(`https://us.api.blizzard.com/data/wow/pet/${i}?namespace=static-us&locale=en_US&access_token=USNsoR5gTkRt06wSa1Srk1NT89IdI1Zxqf`)
      .then(res => res.json())
      .then(data => {this.setState({
        apiPets: [...this.state.apiPets, data]
      })})
    }
  }

  addPet = (pet) => {
    console.log(pet)
  }

  removePet = (pet) => {
    console.log(pet)
  }

  setHoveredPet = (pet) => {
    console.log("hey, setting the pet", pet)
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
            hoveredPet={hoveredPet} 
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
