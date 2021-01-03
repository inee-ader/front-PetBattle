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
            <div>
                <Container className="p-3">
                    <Row>{pets.slice(0,5).map(pet=>{
                        return(
                            <Col>
                                <PetCard key={pet.id}
                                pet={pet}
                                handleClick={handleClick}
                                setHoveredPet={setHoveredPet}
                                />
                            </Col>
                        )
                    })}
                    </Row>
                    <Row>{pets.slice(5,10).map(pet=>{
                        return(
                            <Col>
                                <PetCard key={pet.id}
                                pet={pet}
                                handleClick={handleClick}
                                setHoveredPet={setHoveredPet}
                                />
                            </Col>
                        )
                    })}
                    </Row>
                    <Row>{pets.slice(10,15).map(pet=>{
                        return(
                            <Col>
                                <PetCard key={pet.id}
                                pet={pet}
                                handleClick={handleClick}
                                setHoveredPet={setHoveredPet}
                                />
                            </Col>
                        )
                    })}
                    </Row>

                {/* <h3>Select Pets</h3>
                <div className="">
                    {pets.map(pet => {
                        return <PetCard
                            key={pet.id}
                            pet={pet}
                            handleClick={handleClick}
                            setHoveredPet={setHoveredPet} 
                        />
                    })}
                </div> */}
                </Container>
            </div>
        );
    }
}

export default SelectPetsContainer;
