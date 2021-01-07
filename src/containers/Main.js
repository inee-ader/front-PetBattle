import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import LoginContainer from '../mainContainers/LoginContainer';
import MainMenuContainer from '../mainContainers/MainMenuContainer';
import ChooseTeamContainer from '../mainContainers/ChooseTeamContainer';
import BattleContainer from '../mainContainers/BattleContainer';
import SignUpContainer from '../mainContainers/SignUpContainer';
import EditUserContainer from '../mainContainers/EditUserContainer'

class Main extends Component {

    state= {name: ""}

    renderForm = (routerProps) => {
        if(routerProps.location.pathname === "/"){

          return <LoginContainer setPageState={this.props.setPageState} handleLogin={this.handleLogin} />
        
        } else if (routerProps.location.pathname === "/signup"){
            
          return <SignUpContainer handleSubmit={this.handleSignup} /> 
        //   this.props.setPageState('sign up')
        }
    }

    chooseTeam = (routerProps) => {
        const {pets, team, addPet, removePet, hoveredPet, setHoveredPet, setPageState, page} = this.props

        if(routerProps.location.pathname === "/chooseTeam"){
          return <ChooseTeamContainer 
                setPageState={this.props.setPageState}
                addPet={addPet} 
                removePet={removePet} 
                team={team} 
                pets={pets}
                hoveredPet={hoveredPet} //state
                setHoveredPet={setHoveredPet}
            />
        } 
    }

    main = (routerProps) => {
        if(routerProps.location.pathname === "/main"){
            return <MainMenuContainer 
                setPageState={this.props.setPageState}
                history={this.props.history}
            />
        } 
       
    }

    battle = (routerProps) => {
        if(routerProps.location.pathname === "/battle"){
            return <BattleContainer 
                setPageState={this.props.setPageState}
                history={this.props.history}
                currentGame={this.props.currentGame}
              />
        } 
    }

    editUser = (routerProps) => {
        if(routerProps.location.pathname === "/editUser"){
            return <EditUserContainer 
                setPageState={this.props.setPageState}
                history={this.props.history}
                userID={this.props.userID}
              />
        } 

    }

    handleLogin = (info) => {
        this.handleAuthFetch(info, 'http://localhost:3000/login')
        // this.props.setPageState('login')
    }

    handleAuthFetch = (info, request) => {  
        fetch(request, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                name: info.name,
                password: info.password
            })
        })
        .then(res => res.json())
        .then(data => {
          // stores the user in state, but stores the token in localStorage     

            this.setState({name: data.name},() => {
                localStorage.setItem('jwt', data.token)
                this.props.history.push('/main')
            })
            this.props.setUserIDState(data.user.id)
        })
        .then(() => this.props.setAPIPetsState())
    }
    handleSignup = (info) => {
        console.log('sign up')
        this.handleSignUpFetch(info, 'http://localhost:3000/users')
      }
    handleSignUpFetch = (info, request) => {  
        fetch(request, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
          },
          body: JSON.stringify({
            user:{
                name: info.name,
                password: info.password,
                alias: info.alias,
                bio: info.bio,
                gif_url: info.gif_url
            }
          })
        })
        .then(res => res.json())
        .then(data => {
            console.log("inside the fetch", data)
        //   stores the user in state, but stores the token in localStorage
          this.setState({name: data.user.name}, () => {
            localStorage.setItem('jwt', data.token)
            this.props.history.push('/main')
          })

        this.props.setUserIDState(data.user.id)
        
        })
        .then(() => {
            this.props.setAPIPetsState()
        })
      }
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={this.renderForm} />
                    <Route path="/signup" exact component={this.renderForm} />
                    <Route path="/battle" exact component={this.battle} />
                    <Route path="/main" exact component={this.main} />
                    <Route path="/chooseTeam" exact component={this.chooseTeam} />
                    <Route path="/editUser" exact component={this.editUser} />
                </Switch>
            </div>
        );
    }
}
export default withRouter(Main);