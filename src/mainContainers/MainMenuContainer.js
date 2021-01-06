import React, { Component } from 'react';
// import {Redirect} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

class MainMenuContainer extends Component {
    team = () => {
        // <Redirect to="/chooseTeam" />
        this.props.history.push("/chooseTeam")
      }

    edit = () => {
        // <Redirect to="/chooseTeam" />
        this.props.history.push("/editUser")
    }

    render() {
        return (
            <div>
                <h2>Main Menu</h2>

                <Button variant="primary" size="lg" onClick={this.team}>Choose Team</Button>

                {/* <Button variant="primary" size="lg" onClick={() => handleClick()}>Edit User</Button> */}

                {/* <Button variant="primary" size="lg" onClick={() => handleClick()}>Delete User</Button> */}

            </div>
        );
    }
}

export default MainMenuContainer;
