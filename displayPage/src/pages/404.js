import React from "react"
import Layout from "../components/Layout"
import { BiCommentError } from "react-icons/Bi"
import  Container  from "react-bootstrap/Container"
import  Row  from "react-bootstrap/Row"

export default function Error(){
    return(
        <Layout>
            <Container fluid  >
                <Row className="text-center align-items-center justify-content-center" style={{ height:"60vh"}} >
                    <h1 style={{fontSize:"90px"}}>  404 - Error - Page not found ! <BiCommentError style={{fontSize:"2em", marginTop:"30px"}} /> </h1>
                </Row>
            </Container>
        </Layout>
    )
}