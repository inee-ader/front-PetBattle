import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class GameOver extends Component {

    componentDidMount() {
        this.props.setPageState('game over')
    }
    main = () => {
        this.props.setPageState("main menu")
        this.props.history.push("/main")
    }
    render() {
        return ( 
            <div>
                <br/>
                <br/>
                <h3> YOU'VE LOST. YOU'RE NOTHING. </h3>
                <br/>
                <br/>
                <Button variant="warning" size="lg" onClick={() => {this.main()}}>Main Menu</Button> 
            </div>       
        );
    }
}

export default GameOver;