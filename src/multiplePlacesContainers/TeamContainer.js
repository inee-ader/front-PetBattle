import React, { Component } from 'react';
import PetCard from '../components/petComponents/PetCard';

class TeamContainer extends Component {
    // Error: 'cannot read property 'map' of undefined'...it's not getting props down for team?? 
    render() {
        const {team, handleClick} = this.props

        makeTeam = () => {
            if(team.length){
                team.map(pet => {
                    return <PetCard 
                        key={pet.id}
                        pet={pet}
                        handleClick={handleClick}
                    />
                })
            }
        }
        
        return (
            <div>
                <h3>Team Container</h3>
                <div className="">
                    {makeTeam()}
                </div>
            </div>
        );
    }
}

export default TeamContainer;
