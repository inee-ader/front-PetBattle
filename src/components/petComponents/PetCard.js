import React from 'react';

// hover over shows description
// state in pet card for hover? state for currently clicked? 


const PetCard = props => {
    
    // set an onClick that pushes that pet's info to PetIconCard and PetStatsCard
    // does that onClick live in PetCard? Does PetIconCard and PetStatsCard now belong in PetCard component? 

    return (
        <div className="pet-card" onClick={()=>props.handleClick(props.pet)}>
            <h4>{props.pet.name}</h4>
            <img src={props.pet.icon} alt="pet icon" />
        </div>
    );
}

export default PetCard;
