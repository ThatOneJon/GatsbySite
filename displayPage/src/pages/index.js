import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"

export default function Home() {
  return (
      <Layout>
        <Container style={{backgroundColor:"black"}}>
          <h1>Homepage</h1>
        </Container>
      </Layout>
    )
}
