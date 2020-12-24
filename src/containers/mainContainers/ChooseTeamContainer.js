import React, { Component } from 'react';
import TeamContainer from '../../multiplePlacesContainers/TeamContainer';
import SelectPetsContainer from './SelectPetsContainer';
// import PetCard from '../components/petComponents/PetCard';
import PetIconCard from '../../components/petComponents/PetIconCard';
import PetStatsCard from '../../components/petComponents/PetStatsCard';

class ChooseTeamContainer extends Component {
    render() {
        return (
            <div>
                <h4>Choose Team</h4>
                <div className="">
                    <TeamContainer/>
                </div>

                <div className="">
                    <SelectPetsContainer/>
                </div>

                <h5>Pet STATS AND STUFF</h5>
                <div className="">
                    <PetIconCard/>
                    <PetStatsCard/>
                </div>
            </div>
        );
    }
}

export default ChooseTeamContainer;
