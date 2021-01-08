import React, { Component } from 'react';
import PetCard from '../components/petComponents/PetCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SelectPetsContainer extends Component {
    
    // let firstFive=pets[0..4]
    // let secondFive=pets[5..9]
    // let thirdFive=pets[10..14]

    render() {
        const {pets, handleClick, setHoveredPet} = this.props
        return (
            <Container className="">
                <div className="container">
                    {pets.map(pet => {
                        return <PetCard
                            key={pet.id}
                            pet={pet}
                            handleClick={handleClick}
                            setHoveredPet={setHoveredPet} 
                            />
                    })}
                </div>
            </Container>
        );
    }
}

export default SelectPetsContainer;
