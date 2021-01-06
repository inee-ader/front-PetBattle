import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
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
            <div>
                <h2>Main Menu</h2>

                <Button variant="primary" onClick={this.team}>Choose Team</Button>

                <Button variant="primary" onClick={this.edit}>Edit User</Button>

                <Button variant="primary" onClick={this.logout}>Log Out</Button>

            </div>
        );
    }
}

export default MainMenuContainer;
