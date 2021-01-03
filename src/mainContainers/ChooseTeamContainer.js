import React, { Component } from 'react';
import TeamContainer from '../multiplePlacesContainers/TeamContainer';
import SelectPetsContainer from './SelectPetsContainer';
// import PetCard from '../components/petComponents/PetCard';
import PetIconCard from '../components/petComponents/PetIconCard';
import PetStatsCard from '../components/petComponents/PetStatsCard';

// footerInfo state is going to have 'BATTLE' button
// footerInfo state comes down from App through props
// battle button won't enable until 3 slots in TeamContainer are occupied

class ChooseTeamContainer extends Component {

    
 // hover over pet changes PetIconCard and PetStatsCard. conditional: if nothing is hovered, clear those windows
    

    render() {
        const {pets, removePet, addPet, team, hoveredPet, setHoveredPet} = this.props

        return (
            <div>
                <h4>Choose Team</h4>
                <div className="">
                    <TeamContainer 
                        team={team}
                        handleClick={removePet}
                    />
                </div>

                <div className="">
                    <SelectPetsContainer 
                        pets={pets}
                        handleClick={addPet}
                        setHoveredPet={setHoveredPet}
                    />
                </div>
                <div>
                    <PetIconCard hoveredPet={hoveredPet} />
                </div>
                <div>
                    <PetStatsCard hoveredPet={hoveredPet}/>
                </div>
            </div>
        );
    }
}

export default ChooseTeamContainer;
