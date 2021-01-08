import React from 'react';
import Card from 'react-bootstrap/Card';

const PetStatsCard = props => {
    if(props.hoveredPet){
    return (    
            <Card id="stats-card" className="bg-dark text-white border-warning variant-top" style={{width: "200px"}}>
                <strong>Name: </strong> {props.hoveredPet.name}
                <br/>
                <strong>Type: </strong> {props.hoveredPet.pet_type}
                <br/>
                <strong>Abilities: </strong> {JSON.parse(props.hoveredPet.abilities).map(ability => { return ability + ' '})} 
            </Card>
        );
    } else { return null }
}

export default PetStatsCard;