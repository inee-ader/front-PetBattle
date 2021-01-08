import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'


class SignUpContainer extends Component {
    state = {
        name: "",
        password: "",
        alias: "",
        bio: "",
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }
    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
          [name]: value
        })
    }
    componentDidMount(){
        this.props.setPageState('sign up')
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.title}</h1>
                <label htmlFor="username">Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>{' '}
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>{' '}
                <label htmlFor="alias">Alias:</label>
                <input type="alias" name="alias" value={this.state.alias} onChange={this.handleChange}/>{' '}
                <label htmlFor="bio">Bio:</label>
                <input type="bio" name="bio" value={this.state.bio} onChange={this.handleChange}/>{' '}
                <Button variant="warning" size="md" onClick={this.logout} type="submit" value="Submit">Submit</Button>
            </form>
        );
    }
}

export default SignUpContainer;
