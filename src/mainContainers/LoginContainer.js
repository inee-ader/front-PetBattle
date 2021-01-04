import React, { Component } from 'react';

class LoginContainer extends Component {
    state = {
        name: "",
        password: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
      }
    
      handleChange = (e) => {
        let {title, value} = e.target
        this.setState({
          [title]: value
        })
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.title}</h1>
                <label htmlFor="username">Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default LoginContainer;
