import React from 'react';

const PetIconCard = props => {
    return (
        <div>
            <img src={props.hoveredPet.img_url} alt="pet icon" /> 
        </div>
    );
}

export default PetIconCard;