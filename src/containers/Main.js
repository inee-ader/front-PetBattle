import React, { Component } from 'react';
import BattleContainer from '../mainContainers/BattleContainer';
import ChooseTeamContainer from '../mainContainers/ChooseTeamContainer';
import LoginContainer from '../mainContainers/LoginContainer';
import MainMenuContainer from '../mainContainers/MainMenuContainer';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>Main</h1>
                <div className="">
                    <BattleContainer/>
                </div>
                <div className="">
                    <ChooseTeamContainer/>
                </div>
                <div className="">
                    <LoginContainer/>
                </div>
                <div className="">
                    <MainMenuContainer/>
                </div>
            </div>
        );
    }
}

export default Main;


