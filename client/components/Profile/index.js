import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'

class Profile extends Component {

    state = {
        username: "",
        name: "",
        dob: ""
    }

    static getDerivedStateFromProps(nextProps, currentState) {
        if (nextProps.userInfo !== currentState) {
            return {
                username: nextProps.username,
                name: nextProps.name,
                dob: nextProps.dob
            }
        }
        return null
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    onUpdateProfileListener = (e) => {
        e.preventDefault()
        const updatedUser = this.state
        console.log('updatedUser', updatedUser)
    }

    render() {
        const {username, name, dob} = this.state
        return (
            <Row>
                <Col xs={12} sm={12} md={{span: 4, offset: 4}} lg={{span: 4, offset: 4}}>
                    <Card style={{ width: '100%' }}>
                        <Card.Img 
                            variant="top" 
                            src="https://www.w3schools.com/howto/img_avatar.png"
                        />
                        <Card.Body>
                            <Card.Title>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control 
                                        type="text" 
                                        name="username" 
                                        placeholder="Username"
                                        onChange={this.onChange}
                                        value={username}
                                        readOnly
                                    />
                                </Form.Group>
                            </Card.Title>
                            <Card.Text>
                                <Form.Group controlId="displayName">
                                    <Form.Control 
                                        type="text" 
                                        name="name" 
                                        placeholder="Display name" 
                                        onChange={this.onChange}
                                        value={name}
                                    />
                                </Form.Group>
        
                                <Form.Group controlId="dateOfBirth">
                                    <Form.Control 
                                        type="date" 
                                        name="dob" 
                                        placeholder="Date of birth"
                                        onChange={this.onChange}
                                        value={dob}
                                    />
                                </Form.Group>
                            </Card.Text>
                            <Button variant="primary" onClick={this.onUpdateProfileListener}>Update Profile</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    userInfo: state.userInfo.data
})

const mapDispatchToProps = dispatch => ({
    // updateProfile: (updatedUser) => dispatch(updateProfile(updatedUser)) 
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
