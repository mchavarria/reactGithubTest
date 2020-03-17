import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            editing: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            userInfo: nextProps.profile
        })
    }

    updateValue(type, event) {
        let userCopy = JSON.parse(JSON.stringify(this.state.userInfo));
        userCopy[type] = event.target.value;
        this.setState({userInfo: userCopy});
    }

    render() {
        return (
            <div className="container">
            <Button onClick={() => this.setState({ editing: !this.state.editing })}>
                {this.state.editing ? 'Cancel' : 'Edit'}
            </Button>
            <hr />
            {this.state.editing ?
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={this.state.userInfo.name}
                        onChange={this.updateValue.bind(this,'name')}
                    />
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                        type="text"
                        name="bio"
                        value={this.state.userInfo.bio}
                        onChange={this.updateValue.bind(this,'bio')}
                    />
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        name="location"
                        value={this.state.userInfo.location}
                        onChange={this.updateValue.bind(this,'location')}
                    />
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                        type="text"
                        name="company"
                        value={this.state.userInfo.company}
                        onChange={this.updateValue.bind(this,'copmany')}
                    />
                </Form.Group>
            :
                <div>
                    <p><strong>Name:</strong> {this.state.userInfo.name}</p>
                    <p><strong>Bio:</strong> {this.state.userInfo.bio}</p>
                    <p><strong>Location:</strong> {this.state.userInfo.location}</p>
                    <p><strong>Company:</strong> {this.state.userInfo.copmany}</p>
                </div>
            }
            </div>
        )
    };
}

export default Profile;
