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

    render() {
        return (
            <div className="main-menu-btns">
                <h2>Main Menu</h2>
                <Button variant="warning" size="md" onClick={this.team} block >Choose Team</Button>
                <br/>
                <Button variant="warning" size="md" onClick={this.edit} block >Edit User</Button>
                <br/>
                <Button variant="warning" size="md" onClick={this.logout} block >Log Out</Button>
            </div>
        );
    }
}

export default MainMenuContainer;
