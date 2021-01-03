import React, { Component } from 'react';
import PetCard from '../components/petComponents/PetCard';

class SelectPetsContainer extends Component {
    
    render() {
        const {pets, handleClick, hoveredPet, setHoveredPet} = this.props

        return (
            <div>
                <h3>Select Pets</h3>
                <div className="">
                    {pets.map(pet => {
                        return <PetCard
                            key={pet.id}
                            pet={pet}
                            handleClick={handleClick}
                            setHoveredPet={setHoveredPet} 
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default SelectPetsContainer;
