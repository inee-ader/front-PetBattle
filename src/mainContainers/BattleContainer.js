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
        win: null,
        exp: "",
        gold: "",
        turnOrder: [],
        attackingPet: {},
        script:"",
        bossHP: 0,
        deadPets: []
    }

    componentDidMount() {    

       
        this.setBattleState()
        this.props.setPageState('battle')

        //update script with like 'a manticore enters, FIGHT'
        

        // if buttonPressState != ""
        //     run dmg stuff
        //     then run boss' turn
    }

  



    componentDidUpdate() {

        if (this.props.battleButtonPressed) {

            this.doPetTurn()

            console.log("hi in if statement")

            // this.props.setBattleButtonState("")
            
            this.setState({
                bossHP: this.state.bossHP - this.petDamageCalculator(this.props.battleButtonPressed)
            })

            //update script

            // how to disable buttons after 1 click
            // do boss action

            this.doBossTurn() // also undisable the button

        } else {
            return
        }

        
        
        // switch(this.props.battleButtonPressed) {

        //     case '1': 
        //     break;
        //     case '2':
        //     break;
        //     case '3':
        //     break;

        //     default: 
        //     break
        // }

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
                gold: data.gold,
                bossHP: data.bosses[0].hp,
                script: "A ferocious manticore appears... FIGHT"
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
        const originalOrder = [0,1,2]
        // const originalOrder = [0,1,2,3]
        let turnOrder = []
        for(let i = originalOrder.length; i > 0; i--) {
            let temp = Math.floor(Math.random() * Math.floor(i))
            let element = parseInt(originalOrder.splice(temp,1).toString())
            let monster;
            if(element < 3) {
                monster = this.state.team[element]
            } 
            // else if(element === 3) {    
            //     monster = this.state.boss
            // }
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
        // console.log("turn order", turnOrder)
    }
    
    battleSequence = () => {
        this.props.setBattleButtonState("")

        this.doPetTurn()

        this.doBossTurn()
    }

    

    petDamageCalculator = (ability) => {

        let damage

        switch(ability) {
            case "0":

                 damage = Math.floor(Math.random() * Math.floor(25 - 3) + 4) 

                return damage
            break;
            case "1":
                 damage = Math.floor(Math.random() * Math.floor(15 - 9) + 10) 

                if (damage % 2 === 0) {
                    damage = damage * 2
                }
                return damage
            break;
            case "2":
                 damage = Math.floor(Math.random() * Math.floor(30 - 1) + 2) 

                return damage
            break;
            default:
                 damage = Math.floor(Math.random() * Math.floor(20 - 9) + 10) 

                return damage
        }

    }

    doPetTurn = () => {

        // this.props.setBattleButtonState("")

        //check pet health

        if (this.state.attackingPet.hp <= 0) {

            this.handlePetDeath()

        } else {

            let damage = this.petDamageCalculator(this.props.battleButtonPressed)

            this.setState({
                bossHP: this.state.bossHP - damage
            })

            this.setScript(`${this.state.attackingPet.name} uses ${this.state.attackingPet.abilities[parseInt(this.props.battleButtonPressed)]} for ${damage} damage`)
        }
    }


    handlePetDeath = () => {

        this.setScript(`Oh no! ${this.state.attackingPet.name} has fallen!`)

        if (this.state.deadPets.length === 0 ) {
            this.setState({
                deadPets: this.state.attackingPet,
                attackingPet: this.state.team[this.state.turnOrder[1]]
            })
        } else if (this.state.deadPets.length === 1) {
            this.setState({
                deadPets: this.state.attackingPet,
                attackingPet: this.state.team[this.state.turnOrder[2]]
            })
        } else if (this.state.deadPets.length === 2) {
            this.setState({win: false})
            this.handleGameLoss(this.state.win)
        }

    }

    doBossTurn = () => {

        let ability = Math.floor(Math.random() * Math.floor(4)).toString()

        if (this.state.boss.hp <= 0) {

            this.setState({win: true})
            
            this.handleGameEnd()

        } else {

            let damage = this.petDamageCalculator(this.props.battleButtonPressed)

            this.setState({
                bossHP: this.state.bossHP - damage
            })

            this.setScript(`${this.state.attackingPet.name} uses ${this.state.attackingPet.abilities[parseInt(this.props.battleButtonPressed)]} for ${damage} damage`)
        }//  calc damage THEN update script

        this.doPetTurn()

    }


    bossDamageCalculator = (ability) => {
        
        let damage

        switch(ability) {
            case "0":

                    damage = Math.floor(Math.random() * Math.floor(20 - 3) + 4) 

                return damage
            break;
            case "1":
                    damage = Math.floor(Math.random() * Math.floor(30 - 9) + 10) 

                if (damage % 2 === 0) {
                    damage = damage * 2
                }
                return damage
            break;
            case "2":
                    damage = Math.floor(Math.random() * Math.floor(40 - 1) + 2) 

                return damage
            break;
            default:
                    damage = Math.floor(Math.random() * Math.floor(20 - 9) + 10) 

                return damage
        }
    
        
    }

    setScript = (text) => {
        this.setState({
            script: text
        })
    }

    handleGameEnd = (result) => {

        // FETCH???

        this.state.win ? this.props.history.push(`/winner`) : this.props.history.push(`/gameover`)
        

    }
    
 //boss enters
 //attacking pet enters

 // choose your move


 //choose attacking pets moves
 //updates move state  => hits our componenet did update => we do dmg math, subtract from boss hp, THEN set button press to "" 
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
                    <TeamContainer team={this.state.team} setHoveredPet={this.props.setHoveredPet} handleClick={this.props.doNothing}/>
                </div>

                <div className="">
                    <PetCard attackingPet={this.state.attackingPet} setHoveredPet={this.props.setHoveredPet} handleClick={this.props.doNothing}/>
                </div>

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

