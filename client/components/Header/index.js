import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'

import './index.css'

const Header = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Form>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            <Nav className="ml-auto">        
                <Nav.Link to="#">
                    <Image 
                        src="https://www.w3schools.com/howto/img_avatar.png" 
                        style={{width: 30, height: 30, objectFit: "cover"}} 
                        roundedCircle
                    />
                </Nav.Link>
                <Nav.Link as={NavLink} to="/sign-in">Sign In</Nav.Link>
                <Nav.Link as={NavLink} to="/sign-up">Sign Up</Nav.Link>
                <NavDropdown title="My Account" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/duong/posts">New Post</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#sign-out">Sign Out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header
