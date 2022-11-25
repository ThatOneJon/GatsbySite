import  React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import CarDataQuery from "../components/CarDataQuery"

export default function Home(props) {


  

  return (
      <Layout>
        <Container fluid="sm" style={{backgroundColor:"#"}}>
             <CarDataQuery data={props.location.state} />
        </Container>
      </Layout>
    )
}
