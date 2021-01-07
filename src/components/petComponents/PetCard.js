import React from 'react';
import Card from 'react-bootstrap/Card'
// hover over shows description
// state in pet card for hover? state for currently clicked? 


const PetCard = props => {
    
    // 

    return (
        <Card 
            className="bg-dark text-white border-warning variant-top" 
            style={{width: "100px"}} 
            onClick={()=>props.handleClick(props.pet)} 
            onMouseEnter={()=>props.setHoveredPet(props.pet)} 
        >
            <Card.Img src={props.pet.img_url} variant="top" alt="pet icon" />
            <h6>{props.pet.name}</h6>
        </Card>
    );
}

export default PetCard;
