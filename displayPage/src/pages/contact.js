import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import {GrContact} from "react-icons/Gr"

export default function Contact(){
    return(
        <Layout>
            <Container>
                <h1>Contact us here!  <GrContact /></h1> 
                <ContactForm />
            </Container>
        </Layout>
    )
}