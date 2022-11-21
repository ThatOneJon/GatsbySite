import React from "react"
import {Container, Nav} from "react-bootstrap"


export default function Navbar(){
    return(
        <Container>
            <Nav>
                <Nav.Item>
                    <Nav.Link Link="/home">Active</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>

    )
}