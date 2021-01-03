import React from 'react';

const PetStatsCard = props => {

    // after refresh, it cannot access type. is able to find type upon save and NOT refresh. 

    return (
 
        <div>
           
            name: {props.hoveredPet.name}
            <br/>
            description: {props.hoveredPet.description}
            <br/>
            {/* type: {props.hoveredPet.battle_pet_type.name}  */}
          
        </div>
    );
}

export default PetStatsCard;
