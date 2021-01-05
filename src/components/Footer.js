import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css'

class Footer extends Component {

    
    renderSwitch = () => {
        const {info, page, handleClick} = this.props
        switch(page) {

            // case 'login':
            //     //code 
            // break;
            case 'main menu':
               //code
            break; 
            case 'choose team': 
                //code
                return <Button variant="primary" size="lg" onClick={() => handleClick()}>BATTLE</Button> // creates everything
            break;
            case 'battle': 
                //code
            break;
            case 'battle end': 
                //code
            break;
            default: 
                //this will default to login - so put login buttons here
        }
    }


    render() {
        return (
            <div>
                {this.renderSwitch()}
            </div>
        );
    }
}

// start battle button - main menu page

        // BATTLE button - chose team page

        // during battle ability buttons

        // back to menu button & choose team - post battle page

export default Footer;


