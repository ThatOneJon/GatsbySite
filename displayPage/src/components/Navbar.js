import React from "react"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import { FaCarSide } from "react-icons/fa"
import {Link} from "gatsby"
// syntax: <Link to = "/contact">Contact</Link>


export default function Navigation(){
    return (
        <Navbar sticky="top" variant="dark" bg="dark" className="justify-content-between p-3">
            <Container >
                <Navbar.Brand>
                    <FaCarSide style={{color:"white"}} />
                    CarStats
                </Navbar.Brand>

                    <Nav className="w-75 justify-content-between">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to = "/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to ="/">Manufacturers</Nav.Link>
                    </Nav>
            </Container>
            </Navbar>
    )
}