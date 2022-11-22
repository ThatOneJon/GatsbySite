import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import CarData from "../components/CarData"


export default function Home() {
  return (
      <Layout>
        <Container fluid="sm" style={{backgroundColor:"#"}}>
          < CarData />
        </Container>
      </Layout>
    )
}
