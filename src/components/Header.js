import React, { Component } from 'react';

class Header extends Component {

    renderSwitch = () => {
        const {info, page} = this.props
        switch(page) {
            case 'main menu':
               return <h1>MAIN MENU</h1> 
            case 'edit user': 
                return <h1>EDIT USER</h1>
            case 'sign up': 
                return <h1>SIGN UP</h1>
            case 'choose team': 
               return <h1>CHOOSE YOUR TEAM</h1>
            case 'battle': 
                return <h1>BATTLE</h1>
            case 'winner': 
                return <h1>WINNER WINNER</h1>
            case 'gameover': 
                return <h1>GAME OVER LOSER</h1>
            default: 
                return <h1>LOGIN</h1>
        }
    }
    render() {
        return (
            <div>
                {this.renderSwitch()}
            </div>
        );
    }
}
export default Header;