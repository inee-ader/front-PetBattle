import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
const BASEURL = 'http://localhost:3000'

class EditUserContainer extends Component {
    state = {
        name: "",
        gif_url: "",
        alias: "",
        bio: "",
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const object =
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                name: this.state.name,
                gif_url: this.state.gif_url,
                bio: this.state.bio,
                alias: this.state.alias
            }) 
        }
        fetch(`${BASEURL}/users/${this.props.userID}`, object)
        .then(res => res.json())
        .then(data => {
            this.props.history.push("/main")
        })
    }
    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
          [name]: value
        })
    }
    delete = () => {
        fetch(`${BASEURL}/users/${this.props.userID}`, {method: "DELETE"})
        .then(res => res.json())
        .then(data => {
            this.props.history.push("/signup")
            localStorage.clear()
        })
    }
    componentDidMount() {
        this.props.setPageState('edit user')
        fetch(`${BASEURL}/users/${this.props.userID}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                name: data.name,
                gif_url: data.gif_url,
                bio: data.bio,
                alias: data.alias
            })
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>{this.props.title}</h1>
                    <label htmlFor="username">Name:</label>
                    <input type="text" name="name" defaultValue={this.state.name} onChange={this.handleChange}/>{' '}
                    <label htmlFor="alias">Alias:</label>
                    <input type="alias" name="alias" defaultValue={this.state.alias} onChange={this.handleChange}/>{' '}
                    <label htmlFor="bio">Bio:</label>
                    <input type="bio" name="bio" defaultValue={this.state.bio} onChange={this.handleChange}/>{' '}
                    <Button variant="warning" size="md" onClick={this.logout} type="submit" value="Submit">Submit Edits</Button>
                </form>
                <Button variant="warning" onClick={this.delete}>Delete User</Button>
            </div>
        );
    }
}

export default EditUserContainer;