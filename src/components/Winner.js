import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Winner extends Component {
    componentDidMount() {
        this.props.setPageState('winner')
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
                <h3> YOU'VE WON EXP... GOLD... FAME... </h3>
                <br/>
                <br/>
                <Button variant="warning" size="lg" onClick={() => {
                        this.main()}}>Main Menu</Button> 
            </div>       
        );
    }
}

export default Winner;
