import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css'

class Footer extends Component {

    battle = () => {
        this.props.setPageState("battle")
    }

    renderSwitch = () => {

        const {info, page, handleClick} = this.props
        
        switch(page) {
            // case 'login':
            //     //code 
            // break;
            case 'main menu':
               //code // no footer
            break; 
            case 'choose team': 
                //code
                return <Button variant="warning" size="md" block onClick={() => {handleClick()
                    this.battle()}}>BATTLE</Button> 
            break;
            case 'battle': 
                //code
                return <h5>Sup</h5>
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
                <br/>
                {this.renderSwitch()}
            </div>
        );
    }
}

export default Footer;


