import React, { Component } from 'react';
import TeamContainer from '../multiplePlacesContainers/TeamContainer';
import SelectPetsContainer from './SelectPetsContainer';
// import PetCard from '../components/petComponents/PetCard';
import PetIconCard from '../components/petComponents/PetIconCard';
import PetStatsCard from '../components/petComponents/PetStatsCard';

// footerInfo state is going to have 'BATTLE' button
// footerInfo state comes down from App through props


import Container from 'react-bootstrap/Container'

class ChooseTeamContainer extends Component {

    


    render() {
        const {pets, removePet, addPet, team, hoveredPet, setHoveredPet} = this.props


        return (

            <div>
                <Container>
                    <h4>Choose Team</h4>
                    <div className="">
                        <TeamContainer 
                            team={team}
                            handleClick={removePet}
                            setHoveredPet={setHoveredPet}
                        />
                    </div>

                    <div className="">
                        <h4>Select Pets</h4>
                        <SelectPetsContainer 
                            pets={pets}
                            handleClick={addPet}
                            setHoveredPet={setHoveredPet}
                        />
                    </div>
                    <div>
                        {hoveredPet.name ? <PetIconCard hoveredPet={hoveredPet} /> : null }
                    </div>
                    <div>
                        {hoveredPet.name ? <PetStatsCard hoveredPet={hoveredPet} /> : null }
                    </div>
                </Container>
            </div>
        );
    }
}

export default ChooseTeamContainer;