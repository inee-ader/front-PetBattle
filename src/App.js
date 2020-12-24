import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './containers/Main';

class App extends Component {

  state = {
    currentUser: [],
    footerInfo: {}
  }

  render() {
    return (
      <div className="App">
        <header className="">
          <Header/>
        </header>
  
        <body className="">
          <Main/>
        </body>
  
        <footer className="">
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
