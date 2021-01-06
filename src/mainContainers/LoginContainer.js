import React, { Component } from 'react';

class LoginContainer extends Component {
    state = {
        name: "",
        password: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleLogin(this.state)
      }
    
      handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
          [name]: value
        })
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.title}</h1>
                <label htmlFor="username">Name:</label>
                <input type="text" name="name" devaultValue={this.state.name} onChange={this.handleChange}/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" devaultValue={this.state.password} onChange={this.handleChange}/>
                <input type="submit" devaultValue="Submit"/>
            </form>
        );
    }
}

export default LoginContainer;
