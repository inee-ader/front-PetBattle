import React from 'react';

const PetStatsCard = props => {

    // after refresh, it cannot access type. is able to find type upon save and NOT refresh. 
    if(props.hoveredPet){

    return (
            
            <div>
                
                name: {props.hoveredPet.name}
                <br/>
                description: {props.hoveredPet.description}
                <br/>
                type: {props.hoveredPet.battle_pet_type.name}
                <br/>
                abilities: {props.hoveredPet.abilities.map(ability => { return ability.ability.name })} 
            
            </div>
        );
    } else { return null }
}

export default PetStatsCard;