import React, { Component } from 'react';

class Header extends Component {

    renderSwitch = () => {

        const {info, page} = this.props

        switch(page) {
         
            case 'main menu':
               return <h1>MAIN MENU</h1>
            break; 
            case 'edit user': 
                return <h1>EDIT USER</h1>
            break;
            case 'sign up': 
                return <h1>SIGN UP</h1>
            break;
            case 'choose team': 
               return <h1>CHOOSE YOUR TEAM</h1>
            break;
            case 'battle': 
                return <h1>BATTLE</h1>
            break;
            case 'winner': 
            return <h1>WINNER WINNER</h1>
            break;
            case 'gameover': 
            return <h1>GAME OVER LOSER</h1>
            break;
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