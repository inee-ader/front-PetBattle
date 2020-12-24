import React, { Component } from 'react';
import TeamContainer from '../../multiplePlacesContainers/TeamContainer';
import Boss from '../../components/Boss';

class BattleContainer extends Component {
    state = {
        boss:[],
        team:[]
    }
    render() {
        return (
            <div>
                <h3>Battle</h3>
                <div className="">
                    <TeamContainer/>
                </div>

                <div className="">
                    <Boss/>
                </div>

            </div>
        );
    }
}

export default BattleContainer;

