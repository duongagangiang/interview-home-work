import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SignUp extends Component {

    state = {
        username: "",
        password: "",
        name: ""
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    login = () => {
        const user = this.state
        console.log('Login', user)
    }

    render() {
        return (
            <Row>
                <Col xs={12} sm={12} md={{ span: 4, offset: 4 }} lg={{span: 4, offset: 4}}>
                    <h1>Sign Up</h1>
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="username" 
                                placeholder="Username"
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="displayName">
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="name" 
                                placeholder="Display name" 
                                onChange={this.onChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="dateOfBirth">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="name" 
                                placeholder="Date of birth" 
                                onChange={this.onChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.login}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default SignUp
