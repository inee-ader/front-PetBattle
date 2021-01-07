import React, { Component } from 'react';

class Header extends Component {

    renderSwitch = () => {

        const {info, page} = this.props

        switch(page) {
            // case 'login':
            //     return <h1>Login</h1> 
            // break;
            case 'main menu':
               return <h1>Main Menu</h1>
            break; 
            case 'choose team': 
               return <h1>Choose Your Team</h1>
            break;
            case 'battle': 
                return <h1>Battle</h1>
            break;
            case 'battle end': 
                return <h1>Battle Summary</h1>
            break;
            default: 
            
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