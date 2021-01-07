import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css'

class Footer extends Component {
    
    battle = () => {
        this.props.setPageState("battle")
    }

    convertString = () => {
        if(this.props.attackingPetMoves.abilities) {
             return JSON.parse(this.props.attackingPetMoves.abilities)
        }
    }

    renderSwitch = () => {
        const {info, page, handleClick, attackingPetMoves} = this.props

        switch(page) {
            // case 'login':
            //     //code 
            // break;
            case 'main menu':
               //code
            break; 
            case 'choose team': 
                //code
                return <Button variant="primary" size="lg" onClick={() => {
                    handleClick()
                    this.battle()
                }}>BATTLE</Button> // creates everything
            break;
            case 'battle': 
            //code
                let abilities = this.convertString()
                console.log(abilities)
                if(abilities !== undefined) {
                return <div>
                            <Button variant="primary" size="lg" onClick={() => {}}>{abilities[0]}</Button>
                            <Button variant="primary" size="lg" onClick={() => {}}>{abilities[1]}</Button>
                            <Button variant="primary" size="lg" onClick={() => {}}>{abilities[2]}</Button>
                            <Button variant="primary" size="lg" onClick={() => {}}>{abilities[3]}</Button>
                            {/* <Button variant="primary" size="lg" onClick={() => {}}>ATTACK</Button> */}
                        </div>
                }
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


