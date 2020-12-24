import React, { Component } from 'react';
import OwnedPetsContainer from '../multiplePlacesContainers/OwnedPetsContainer';
import TeamContainer from '../multiplePlacesContainers/TeamContainer';

class MainMenuContainer extends Component {
    render() {
        return (
            <div>
                <h4>Main Menu</h4>
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

export default MainMenuContainer;
