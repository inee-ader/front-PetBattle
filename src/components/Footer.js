import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
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
        const {info, page, handleClick, setBattleButtonState} = this.props

        switch(page) {
            case 'main menu':
            break; 
            case 'choose team': 
                return <Button variant="warning" size="lg" block onClick={() => {handleClick()
                    this.battle()}}>BATTLE</Button> 
            break;
            case 'battle': 
                let abilities = this.convertString()
                if(abilities !== undefined) {

                return <div className="battle-btns">
                            <Button name="0" type="submit" value="0" variant="warning" size="lg" onClick={(e) => {
                                setBattleButtonState(e.target.name)
                            }}>{abilities[0]  }</Button>{' '}
                            <Button name="1" type="submit" value="1" variant="warning" size="lg" onClick={(e) => {
                                setBattleButtonState(e.target.name)
                            }}>{abilities[1]}</Button>{' '}
                            <Button name="2" type="submit" value="2" variant="warning" size="lg" onClick={(e) => {
                                setBattleButtonState(e.target.name)
                            }}>{abilities[2]}</Button>{' '}
                            <Button name="3" type="submit" value="3" variant="warning" size="lg" onClick={(e) => {
                                setBattleButtonState(e.target.name)
                            }}>{abilities[3]}</Button>{' '}
                        </div>
                }
            break;
            case 'winner': 
            break;
            case 'game over': 
            break;
            default: 
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

export default Footer;


