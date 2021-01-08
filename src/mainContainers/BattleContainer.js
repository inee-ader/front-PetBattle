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
        attackingPet: [],
        attackingPetHP: 0,
        script: [],
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

        if (this.props.battleButtonPressed === "0" || this.props.battleButtonPressed === "1" || this.props.battleButtonPressed === "2" || this.props.battleButtonPressed === "3") {

            // this.battleSequence()

            this.props.setBattleButtonState("")

            this.doPetTurn()

            setTimeout(this.doBossTurn, 2500);

        } else {
            return null
        }
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
                script: ["A ferocious manticore appears... FIGHT"]
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
                attackingPet: [turnOrder[0]],
                attackingPetHP: turnOrder[0].hp
            })
        }
        this.props.setAttackingPetMoves(this.state.attackingPet[0])
        // console.log("turn order", turnOrder)
    }
    
    // battleSequence = () => {

    //     this.props.setBattleButtonState("")

    //     this.doPetTurn()

    //     debugger

    //     setTimeout(this.doBossTurn(), 2000);

    //     // this.doBossTurn()
    // }

    

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

        console.log("pet turn")

        if (this.state.attackingPetHP <= 0) {

            this.handlePetDeath()
            debugger

        } else {

            let damage = this.petDamageCalculator(this.props.battleButtonPressed)

            this.setState({
                bossHP: this.state.bossHP - damage
            })

            let abilities = this.convertString(this.state.attackingPet[0].abilities)

            this.setScript(`${this.state.attackingPet[0].name} uses ${abilities[parseInt(this.props.battleButtonPressed)]} for ${damage} damage`)
        }
        // debugger
    }


    handlePetDeath = () => {

        this.setScript(`Oh no! ${this.state.attackingPet[0].name} has fallen!`)

        if (this.state.deadPets.length === 0 ) {
            // this.setState({attackingPet: })
            this.setState(prevState => {
                return {
                    deadPets: prevState.attackingPet[0],
                    attackingPet: [prevState.team[prevState.turnOrder[1]], ...prevState.attackingPet]
                }
            })
            console.log("inside ded", this.state.attackingPet)

        } else if (this.state.deadPets.length === 1) {
            this.setState(prevState => {
                return{
                    deadPets: prevState.attackingPet[0],
                    attackingPet: [ prevState.team[prevState.turnOrder[2]], ...prevState.attackingPet]
                }
            })
        } else if (this.state.deadPets.length === 2) {
            this.setState({win: false})
            this.handleGameLoss(this.state.win)
        }
    }

    doBossTurn = () => {

        console.log("boss's turn")

        let ability = Math.floor(Math.random() * Math.floor(4)).toString()

        if (this.state.boss.hp <= 0) {

            this.setState({win: true})
            
            this.handleGameEnd()
        } else {
            if (this.state.attackingPetHP > 0) {
                let damage = this.bossDamageCalculator(ability)
                this.setState(prevState => {
                    return {
                        attackingPetHP: prevState.attackingPetHP - damage
                    }
                })   
                let abilities = this.convertString(this.state.boss.abilities)
                
                this.setScript(` The Manticore uses ${abilities[ability]} for ${damage} damage`)
            } else {
                return null
            }
        }
    }

    convertString = (str) => {
        if(str) {
             return JSON.parse(str) 
        }
    }

    bossDamageCalculator = (ability) => {
        
        let damage

        switch(ability) {
            case "0":
                    damage = Math.floor(Math.random() * Math.floor(20-3) + 4) 
                return damage
            break;
            case "1":
                    damage = Math.floor(Math.random() * Math.floor(30-9) + 10) 

                if (damage % 2 === 0) {
                    damage = damage * 2
                }
                return damage
            break;
            case "2":
                    damage = Math.floor(Math.random() * Math.floor(40-1) + 2) 

                return damage
            break;
            default:
                    damage = Math.floor(Math.random() * Math.floor(20-9) + 10) 

                return damage
        }
    
        
    }

    setScript = (text) => {
        this.setState(prevState => {
            return {
               script: [...prevState.script, text]
            }
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
              
                <div className="battle-team">
                    {/* <TeamContainer team={this.state.team} setHoveredPet={this.props.setHoveredPet} handleClick={this.props.doNothing}/> */}
                </div>

                <div className="active-pet">
                    {/* <PetCard attackingPet={this.state.attackingPet[0]} setHoveredPet={this.props.setHoveredPet} handleClick={this.props.doNothing}/> */}
                </div>

                <div className="boss">
                    <Boss name={this.state.boss.name} moves={this.state.boss.abilities} hp={this.state.bossHp}/>
                </div>

                <div className="script-box">
                    <Script script={this.state.script.length > 1 ? this.state.script[this.state.script.length - 1] : this.state.script[0] }/>
                </div>

            </div>
        );
    }
}

export default BattleContainer;

