import React, { Component } from 'react';
import PetCard from '../../components/petComponents/PetCard';

class SelectPetsContainer extends Component {
    render() {
        return (
            <div>
                <h3>Select Pets</h3>
                <div className="">
                    <PetCard/>
                </div>
            </div>
        );
    }
}

export default SelectPetsContainer;
