import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import LoginContainer from '../mainContainers/LoginContainer';
import MainMenuContainer from '../mainContainers/MainMenuContainer';
import ChooseTeamContainer from '../mainContainers/ChooseTeamContainer';
import BattleContainer from '../mainContainers/BattleContainer';
import SignUpContainer from '../mainContainers/SignUpContainer';

class Main extends Component {
    renderForm = (routerProps) => {
        // console.log(routerProps)
        if(routerProps.location.pathname === "/"){
          return <LoginContainer title="Login Form" handleSubmit={this.handleLogin} />
        } else if (routerProps.location.pathname === "/signup"){
          return <SignUpContainer title="Sign Up Form" handleSubmit={this.handleSignup} />
        }
    }
    chooseTeam = (routerProps) => {
        const {pets, team, addPet, removePet, hoveredPet, setHoveredPet} = this.props
        // console.log(routerProps)
        if(routerProps.location.pathname === "/chooseTeam"){
          return <ChooseTeamContainer 
                addPet={addPet} 
                removePet={removePet} 
                team={team} 
                pets={pets}
                hoveredPet={hoveredPet} //state
                setHoveredPet={setHoveredPet}
            />
        } 
    }
    handleLogin = (info) => {
        console.log('login')
        this.handleAuthFetch(info, 'http://localhost:3000/login')
    }
    handleAuthFetch = (info, request) => {  
        fetch(request, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: info.name,
                password: info.password
            })
        })
        .then(res => res.json())
        .then(data => {
          // stores the user in state, but stores the token in localStorage            this.setState({name: data.name}, () => {
                localStorage.setItem('jwt', data.token)
                this.props.history.push('/')
            })
        })
    }
    handleSignup = (info) => {
        console.log('sign up')
        this.handleSignUpFetch(info, 'http://localhost:3000/users')
      }
    handleSignUpFetch = (info, request) => {  
        fetch(request, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: info.username,
            password: info.password,
            alias: info.alias,
            bio: info.bio,
            gif_url: info.gif_url
          })
        })
        .then(res => res.json())
        .then(data => {
          // stores the user in state, but stores the token in localStorage
          this.setState({name: data.name}, () => {
            localStorage.setItem('jwt', data.token)
            this.props.history.push('/')
          })
        })
      }
    render() {
        return (
            <div>
                {/* <h1>Main</h1> */}
                <Switch>
                    <Route path="/" exact component={this.renderForm} />
                    <Route path="/signup" exact component={this.renderForm} />
                    <Route path="/battle" exact component={this.battle} />
                    <Route path="/main" exact component={this.main} />
                    <Route path="/chooseTeam" exact component={this.chooseTeam} />
                    {/* <div className="">
                        <LoginContainer/>
                    </div>
                    <div className="">
                        <MainMenuContainer/>
                    </div>
                    <div className="">
                        <ChooseTeamContainer/>
                    </div>
                    <div className="">
                        <BattleContainer/>
                    </div> */}
                </Switch>
            </div>
        );
    }
}
export default withRouter(Main);