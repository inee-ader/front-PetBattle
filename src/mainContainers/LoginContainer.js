import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button'

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

      componentDidMount(){
        this.props.setPageState('')
      }

    render() {
        return (
            <form  onSubmit={this.handleSubmit}>
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
