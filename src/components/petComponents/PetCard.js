import React from 'react';
import Card from 'react-bootstrap/Card'
// hover over shows description
// state in pet card for hover? state for currently clicked? 
// attackingPetMoves={Object.keys(this.state.attackingPetMoves).length === 0 && this.state.attackingPetMoves.constructor === Object ? this.state.attackingPetMoves : null}

const PetCard = props => {
    if(props.attackingPet) {
        return ( 
            <div>
                <h5>ACTIVE PET</h5>
                <Card 
                    id="pet-card"
                    className="bg-dark text-white border-warning variant-top" 
                    style={{width: "170px"}} 
                    onClick={()=>props.handleClick(props.attackingPet)} 
                    onMouseEnter={()=>props.setHoveredPet(props.attackingPet)} 
                >
                    <Card.Img src={props.attackingPet.img_url} variant="top" alt="pet icon" />
                    <h4>{props.attackingPet.name}</h4>
                    <h6>HP: {props.hp <= 0 ? 0 : props.hp}</h6>
                </Card>
            </div>
        );

    } else {
        return (
            <Card 
                id="pet-card"
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

}

export default PetCard;
