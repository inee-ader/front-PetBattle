import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Winner extends Component {
    componentDidMount() {
        thi
    }
    main = () => {
        this.props.setPageState("main menu")
        this.props.history.push("/main")
    }

    render() {
        return ( 
            <div>
                <h3> YOU'VE WON EXP... GOLD... FAME... JK</h3>
                <Button variant="warning" size="lg" block onClick={() => {
                        this.main()}}>Main Menu</Button> 
            </div>       
        );
    }
}

export default Winner;
