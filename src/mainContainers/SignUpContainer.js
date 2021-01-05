import React, { Component } from 'react';

class SignUpContainer extends Component {
    state = {
        name: "",
        password: "",
        alias: "",
        bio: "",
        gif_url: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
      }
    
      handleChange = (e) => {
        let {input, value} = e.target
        this.setState({
          [input]: value
        })
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{this.props.title}</h1>
                <label htmlFor="username">Name:</label>
                <input type="text" name="name" defaultValue={this.state.name} onChange={this.handleChange}/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" defaultValue={this.state.password} onChange={this.handleChange}/>
                <label htmlFor="alias">Alias:</label>
                <input type="alias" name="alias" defaultValue={this.state.alias} onChange={this.handleChange}/>
                <label htmlFor="bio">Bio:</label>
                <input type="bio" name="bio" defaultValue={this.state.bio} onChange={this.handleChange}/>
                
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default SignUpContainer;
