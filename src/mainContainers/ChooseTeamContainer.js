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
                    {/* <h4>Your Team</h4> */}
                    <div className="team-box">
                        <TeamContainer 
                            team={team}
                            handleClick={removePet}
                            setHoveredPet={setHoveredPet}
                        />
                    </div>

                    <div className="select-box">
                        {/* <h4>Select Pets</h4> */}
                        <SelectPetsContainer 
                            pets={pets}
                            handleClick={addPet}
                            setHoveredPet={setHoveredPet}
                        />
                    </div>
                    <div className="hover-pet">
                        {hoveredPet.name ? <PetIconCard hoveredPet={hoveredPet} /> : null }
                        <br/>
                        {hoveredPet.name ? <PetStatsCard hoveredPet={hoveredPet} /> : null }
                    </div>
                </Container>
            </div>
        );
    }
}

export default ChooseTeamContainer;