import React from 'react';

// hover over shows description
// state in pet card for hover? state for currently clicked? 


const PetCard = props => {
    
    // 

    return (
        <div className="pet-card" onClick={()=>props.handleClick(props.pet)} onMouseEnter={()=>props.setHoveredPet(props.pet)} >
            <h4>{props.pet.name}</h4>
            <img src={props.pet.img_url} alt="pet icon" />
        </div>
    );
}

export default PetCard;
