import React from 'react';

const PetIconCard = props => {
    return (
        <div>
            <img src={props.hoveredPet.icon} alt="pet icon" /> 
        </div>
    );
}

export default PetIconCard;