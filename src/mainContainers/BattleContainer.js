import React, { Component } from 'react';
import TeamContainer from '../multiplePlacesContainers/TeamContainer';
import Boss from '../components/Boss';
const BASEURL = 'http://localhost:3000'

class BattleContainer extends Component {
    state = {
        boss:[],
        teamID: "",
        team:[],
        win: "",
        exp: "",
        gold: "",
        turnOrder: []
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
            // debugger
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
            } else if(element == 3) {    
                monster = this.state.boss
            }
            turnOrder.push(monster)
        }
        console.log("turn order", turnOrder)
        // this.setState({
        //     turnOrder: [this.state.team[0], this.state.team[1], this.state.team[2],this.state.boss[0]]
        // })
    }

    render() {
        return (
            <div>
                <h3>Battle</h3>
                <div className="">
                    <TeamContainer/>
                </div>

                <div className="">
                    <Boss/>
                </div>

            </div>
        );
    }
}

export default BattleContainer;

