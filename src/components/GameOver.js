import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class GameOver extends Component {
    main = () => {
        this.props.setPageState("main menu")
        this.props.history.push("/main")
    }

    render() {
        return ( 
            <div>
                <h1> GAME OVER LOSER </h1>
                <h3> YOU'VE LOST EXP... GOLD... FAME... YOUR PETS DED YOU PLEB</h3>
                <Button variant="warning" size="lg" block onClick={() => {
                        this.main()}}>Main Menu</Button> 
            </div>       
        );
    }
}

export default GameOver;