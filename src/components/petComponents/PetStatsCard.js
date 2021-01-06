import React from 'react';

const PetStatsCard = props => {

    // after refresh, it cannot access type. is able to find type upon save and NOT refresh. 
    if(props.hoveredPet){
        // debugger
    return (
            
            <div>
                
                name: {props.hoveredPet.name}
                <br/>
                description: {props.hoveredPet.description}
                <br/>
                type: {props.hoveredPet.pet_type}
                <br/>
                abilities: {
                JSON.parse(props.hoveredPet.abilities).map(ability => { return ability})} 
            
            </div>
        );
    } else { return null }
}

export default PetStatsCard;