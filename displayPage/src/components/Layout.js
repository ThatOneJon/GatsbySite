import React from "react"
import Navigation from "./Navbar"
import Sidebar from "./Sidebar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Layout({ children }){
    return(
        <>
            <Navigation />
        <Container fluid className=" mt-3">
            <Row className="justify-content-start">
                <Col lg={1}>
                    <Sidebar  />
                </Col>
                <Col >
                    {children}
                </Col>
            </Row>
        </Container>
        </>
    )
}