import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {connect} from 'react-redux'
import {login} from '../../actions/user'

class SignIn extends Component {

    state = {
        username: "",
        password: ""
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    login = (e, push) => {
        e.preventDefault()
        const user = this.state
        this.props.login(user, push)
    }

    render() {
        const {push} = this.props.history
        return (
            <Row>
                <Col xs={12} sm={12} md={{ span: 4, offset: 4 }} lg={{span: 4, offset: 4}}>
                    <h1>Sign In</h1>
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
                        <Button variant="primary" type="submit" onClick={(e) => this.login(e, push)}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: (user, push) => dispatch(login(user, push))
})

export default connect(null, mapDispatchToProps)(SignIn)
