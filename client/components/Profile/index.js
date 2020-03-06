import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const Profile = () => (
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
                            />
                        </Form.Group>
                    </Card.Title>
                    <Card.Text>
                        <Form.Group controlId="displayName">
                            <Form.Control 
                                type="text" 
                                name="name" 
                                placeholder="Display name" 
                            />
                        </Form.Group>

                        <Form.Group controlId="dateOfBirth">
                            <Form.Control 
                                type="date" 
                                name="name" 
                                placeholder="Date of birth"
                            />
                        </Form.Group>
                    </Card.Text>
                    <Button variant="primary">Update Profile</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
)

export default Profile
