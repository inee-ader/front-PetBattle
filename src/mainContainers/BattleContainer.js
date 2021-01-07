import React, { Component } from 'react';
import TeamContainer from '../multiplePlacesContainers/TeamContainer';
import Boss from '../components/Boss';
import Script from "../components/Script"
import PetCard from '../components/petComponents/PetCard';
const BASEURL = 'http://localhost:3000'

class BattleContainer extends Component {
    state = {
        boss:[],
        teamID: "",
        team:[],
        win: "",
        exp: "",
        gold: "",
        turnOrder: [],
        attackingPet: {},
        script:""
    }

    componentDidMount() {    
        this.setBattleState()
    }

    setBattleState = () => {
        fetch(`${BASEURL}/games/${this.props.currentGame}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                boss: data.bosses[0],
                teamID: data.team.id,
                win: data.win,
                exp: data.exp,
                gold: data.gold
            })
        }).then(() => {
            this.setTeam()
        })
    }

    setTeam = () => {
        fetch(`${BASEURL}/teams/${this.state.teamID}`)
        .then(res => res.json())
        .then(data => {
            data.pets.forEach(pet => {
                this.setState({
                    team: [...this.state.team, pet]
                })
            })
        }).then(() =>{
            this.setTurnOrder()
        })
    }

    setTurnOrder = () => {
        const originalOrder = [0,1,2,3]
        let turnOrder = []
        for(let i = originalOrder.length; i > 0; i--) {
            let temp = Math.floor(Math.random() * Math.floor(i))
            let element = parseInt(originalOrder.splice(temp,1).toString())
            let monster;
            if(element < 3) {
                monster = this.state.team[element]
            } else if(element === 3) {    
                monster = this.state.boss
            }
            turnOrder.push(monster)
            this.setState({
                turnOrder:turnOrder
            })
        }
        if(turnOrder[0].hp > 80) {
            this.setState({
                attackingPet: turnOrder[1]
            })
        } else {
            this.setState({
                attackingPet:turnOrder[0]
            })
        }
        this.props.setAttackingPetMoves(this.state.attackingPet)
        console.log("turn order", turnOrder)
    }
    
    battleSequence = () => {

    }
    
 //boss enters
 //attacking pet enters


 //choose attacking pets moves are we gonna give only the option to attack 
 // Asks to confirm attack y/n
 // does damage(sets states etc.)
 // renders text for pett damage(maybe animations and delay)
 // checks boss hp < 0
 // boss attacks(sets states etc)
 // renders text for pett damage(maybe animations and delay)
 // checks pet hp < 0
 //if pet ded send out next nonded pet
 // repeat


    render() {
        return (
            <div>
                <h3>Battle</h3>
                <div className="">
                    <TeamContainer team={this.state.team} setHoveredPet={this.props.setHoveredPet}/>
                </div>

                {/* <div className="">
                    <PetCard attackingPet={this.state.attackingPet}/>
                </div> */}

                <div className="">
                    <Boss/>
                </div>

                <div className="">
                    <Script script={this.state.script}/>
                </div>

            </div>
        );
    }
}

export default BattleContainer;

