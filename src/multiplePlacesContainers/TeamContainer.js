import React, { Component } from 'react';
import PetCard from '../components/petComponents/PetCard';

class TeamContainer extends Component {    
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
                <div className="">
                    {this.makeTeam()}
                </div>
            </div>
        );
    }
}

export default TeamContainer;
