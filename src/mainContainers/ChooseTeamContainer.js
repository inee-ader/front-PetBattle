import React, { Component } from 'react';
import TeamContainer from '../multiplePlacesContainers/TeamContainer';
import SelectPetsContainer from './SelectPetsContainer';
import PetIconCard from '../components/petComponents/PetIconCard';
import PetStatsCard from '../components/petComponents/PetStatsCard';
import Container from 'react-bootstrap/Container'

class ChooseTeamContainer extends Component {
    componentDidMount(){
        this.props.setPageState('choose team')
    }
    render() {
        const {pets, removePet, addPet, team, hoveredPet, setHoveredPet} = this.props

        return (

            <div>
                <Container>
                    <div className="team-box">
                        <TeamContainer 
                            team={team}
                            handleClick={removePet}
                            setHoveredPet={setHoveredPet}
                        />
                    </div>
                    <div className="select-box">
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