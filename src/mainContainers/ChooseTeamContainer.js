import React, { Component } from 'react';
import OwnedPetsContainer from '../multiplePlacesContainers/OwnedPetsContainer';
import TeamContainer from '../multiplePlacesContainers/TeamContainer';

class ChooseTeamContainer extends Component {
    render() {
        return (
            <div>
                <h4>Choose Team</h4>
                <div className="">
                    <OwnedPetsContainer/>
                </div>
                <div className="">
                    <TeamContainer/>
                </div>
            </div>
        );
    }
}

export default ChooseTeamContainer;
