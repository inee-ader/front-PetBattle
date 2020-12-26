import React, { Component } from 'react';
import TeamContainer from '../multiplePlacesContainers/TeamContainer';
import SelectPetsContainer from './SelectPetsContainer';
// import PetCard from '../components/petComponents/PetCard';
// import PetIconCard from '../components/petComponents/PetIconCard';
// import PetStatsCard from '../components/petComponents/PetStatsCard';

// footerInfo state is going to have 'BATTLE' button
// footerInfo state comes down from App through props
// battle button won't enable until 3 slots in TeamContainer are occupied

class ChooseTeamContainer extends Component {

    state={
        selected: false, 
        team: [], 
        pets: this.props.pets
    }

    // handleClick = (pet) => {
    //     console.log(pet)
    // }

    addPet = (pet) => {
        console.log(pet)
    }

    removePet = (pet) => {
        console.log(pet)
    }

    render() {
        const {pets, removePet, addPet} = this.props

        return (
            <div>
                <h4>Choose Team</h4>
                <div className="">
                    <TeamContainer 
                        team={this.state.team}
                        handleClick={this.removePet}
                    />
                </div>

                <div className="">
                    <SelectPetsContainer 
                        pets={pets}
                        handleClick={this.addPet}
                        selected={this.state.selected}
                    />
                </div>
            </div>
        );
    }
}

export default ChooseTeamContainer;
