import React, { Component } from 'react';
import PetCard from '../components/petComponents/PetCard';

class TeamContainer extends Component {

    // const {team, handleClick} = this.props
    
    makeTeam = () => {  
        if(this.props.team){
            return this.props.team.map(pet => {
                return <PetCard 
                    key={pet.id}
                    pet={pet}
                    handleClick={this.props.handleClick}
                    setHoveredPet={this.props.setHoveredPet}
                />
            })
        }
    }
    render() {
        return (
           
            <div>
                {/* <h3>Team Container</h3> */}
                <div className="team-box">
                    {this.makeTeam()}
                </div>
            </div>
        );
    }
}

export default TeamContainer;
