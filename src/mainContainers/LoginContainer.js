import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

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
    signUp = () => {
      this.props.history.push("/signup")
    }
    componentDidMount(){
      this.props.setPageState('')
    }
    render() {
        return (
          <div>
              <form onSubmit={this.handleSubmit}>
                  <br/> 
                  <h1>{this.props.title}</h1>
                  <label htmlFor="username">Name: </label>{' '}
                  <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>{' '}
                  <label htmlFor="password">Password: </label>{' '}
                  <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>{' '}
                  <Button variant="warning" size="md" onClick={this.logout} type="submit" value="Submit">Login</Button>
              </form>
              <br/>
              <br/>
              <h3>Don't have an account? </h3>
              <Button variant="warning" size="md" onClick={this.signUp}>Sign Up</Button>
            </div>
        );
    }
}

export default LoginContainer;
