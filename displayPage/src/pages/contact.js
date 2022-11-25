import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import {GrContact} from "react-icons/Gr"
import SEO from "../components/SEO"

export default function Contact(){
    return(
        <Layout>
            <SEO title="Contact!" />
            <Container>
                <h1>Contact us here!  <GrContact /></h1> 
                <ContactForm />
            </Container>
        </Layout>
    )
}