import React from 'react';
import Card from 'react-bootstrap/Card'


const PetIconCard = props => {
    return (
        <Card
            id="icon-card"
            className="bg-dark text-white border-warning variant-top" 
            style={{width: "200px"}}
        >
            <Card.Img id="hover-icon" src={props.hoveredPet.img_url} alt="pet icon" /> 
            <strong>Description:</strong>{props.hoveredPet.description}
        </Card>
    );
}

export default PetIconCard;