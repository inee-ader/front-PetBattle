import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './containers/Main';
const AllPets = "https://us.api.blizzard.com/data/wow/pet/index?namespace=static-us&locale=en_US&access_token=UStPv2EvG8484Obpzj05JECVDGdwwrW414"
const array = [39, 40, 42, 43, 44, 45, 46, 47, 49, 56, 72, 87, 89, 107, 126, 143, 192]

class App extends React.Component {

  state = {
    currentUser: [],
    apiPets: [],
    footerInfo: {},
    name: "",
    token: ""
  }

  componentDidMount() {
    // fetch(AllPets)
    // .then(res => res.json())
    // .then(console.log)

    // fetch("https://us.api.blizzard.com/data/wow/pet/142?namespace=static-us&locale=en_US&access_token=UStPv2EvG8484Obpzj05JECVDGdwwrW414")
    // .then(res=> res.json())
    // .then(data => console.log(data))

    // for(let i of array) {
    //   fetch(`https://us.api.blizzard.com/data/wow/pet/${i}?namespace=static-us&locale=en_US&access_token=UStPv2EvG8484Obpzj05JECVDGdwwrW414`)
    //   .then(res => res.json())
    //   .then(data => {this.setState({
    //     apiPets: [...this.state.apiPets, data]
    //   })})
    // }
  }

  render() {
    return (
      <div className="App">
        
        <header className="">
          <Header/>
        </header>
  
        <body className="">
        <BrowserRouter>
          <Main name={this.state.name}/>
        </BrowserRouter>
        </body>
  
        <footer className="">
          <Footer/>
        </footer>
        
      </div>
    );
  }
}

export default App;
