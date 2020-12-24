import React, { Component } from 'react';
import PetCard from '../components/petComponents/PetCard';

class TeamContainer extends Component {
    render() {
        //some function to map pets
        return (
            <div>
                <h3>Team</h3>
                <PetCard/>
            </div>
        );
    }
}

export default TeamContainer;
