import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import 'bootstrap/dist/css/bootstrap.min.css'

class MainMenuContainer extends Component {
    
    team = () => {
        this.props.history.push("/chooseTeam")
      }

    edit = () => {
        this.props.history.push("/editUser")
    }

    logout = () => {
        localStorage.clear()
        this.props.history.push("/")
    }

    componentDidMount(){
        this.props.setPageState('main menu')
    }

    render() {
        return (
            <div className="main-menu-btns">
                {/* <h2>Main Menu</h2> */}
                <Button variant="warning" size="lg" onClick={this.team} block >Choose Team</Button>
                <br/>
                <Button variant="warning" size="lg" onClick={this.edit} block >Edit User</Button>
                <br/>
                <Button variant="warning" size="lg" onClick={this.logout} block >Log Out</Button>
            </div>
        );
    }
}

export default MainMenuContainer;
