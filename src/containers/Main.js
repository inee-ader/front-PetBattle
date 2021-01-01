import React, { Component } from 'react';
import LoginContainer from '../mainContainers/LoginContainer';
import MainMenuContainer from '../mainContainers/MainMenuContainer';
import ChooseTeamContainer from '../mainContainers/ChooseTeamContainer';
import BattleContainer from '../mainContainers/BattleContainer';

class Main extends Component {
    
    render() {

        const {pets, team, addPet, removePet, hoveredPet, setHoveredPet} = this.props

        console.log(`Main Component ${team}`)

        return (
            <div>
                <h1>Main</h1>
                <div className="">
                    <LoginContainer/>
                </div>
                <div className="">
                    <MainMenuContainer/>
                </div>
                <div className="">
                    <ChooseTeamContainer 
                        hoveredPet={hoveredPet} 
                        addPet={addPet} 
                        removePet={removePet} 
                        team={team} 
                        pets={pets}
                        setHoveredPet={setHoveredPet}
                        />
                </div>
                <div className="">
                    <BattleContainer/>
                </div>
            </div>
        );
    }
}

export default Main;


