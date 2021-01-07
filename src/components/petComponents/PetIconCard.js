import React from 'react';
import Card from 'react-bootstrap/Card'


const PetIconCard = props => {
    return (
        <Card
            className="bg-dark text-white border-warning variant-top" 
            style={{width: "150px"}}
        >
            <Card.Img src={props.hoveredPet.img_url} alt="pet icon" /> 
            <strong>Description:</strong>{props.hoveredPet.description}
        </Card>
    );
}

export default PetIconCard;