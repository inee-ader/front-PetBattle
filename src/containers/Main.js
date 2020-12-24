import React, { Component } from 'react';
import LoginContainer from '../mainContainers/LoginContainer';
import MainMenuContainer from '../mainContainers/MainMenuContainer';
import ChooseTeamContainer from '../mainContainers/ChooseTeamContainer';
import BattleContainer from '../mainContainers/BattleContainer';

class Main extends Component {
    render() {
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
                    <ChooseTeamContainer/>
                </div>
                <div className="">
                    <BattleContainer/>
                </div>
            </div>
        );
    }
}

export default Main;


