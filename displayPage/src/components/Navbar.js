import React from "react"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import { FaCarSide } from "react-icons/fa"
import {Link} from "gatsby"
// syntax: <Link to = "/contact">Contact</Link>
// <Nav.Link as={Link} to="/">Home</Nav.Link>


export default function Navigation(){
    return (
        <Navbar sticky="top" variant="dark" bg="dark" className="justify-content-between p-4" style={{fontSize:"25px"}}>
                <Container>
                <Navbar.Brand as={Link} to ="/">
                    <FaCarSide style={{color:"white", marginRight:"5px", fontSize:"30px"}} />
                    CarStats
                </Navbar.Brand>
                    <Nav className="w-75 justify-content-between">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to = "/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to ="/about">About</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}