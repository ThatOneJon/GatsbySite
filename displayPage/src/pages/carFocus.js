import React from "react"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import cars from "../data/carData.json"
import styled from "styled-components"


export default function CarFocus(state){
    let Name = state.location.state.car
    let car = cars.filter(car => car.Name === Name)[0]
    return(
        <Layout>
            <Wrapper>
            { car &&
            <Container fluid style={{backgroundColor:"#daebdf", height:"100vh"}} >
                <Row className="justify-content-center align-items-center display-6 " style={{height:"100vh"}}>
                    <Col lg={6} >
                        <Card border="primary">
                        <Card.Body>
                            <Card.Img src={`${car.image}`} /> 
                            <Card.Title className="text-decoration-underline text-center mb-3 display-4">{Name.toUpperCase()}</Card.Title>
                            <Card.Text>Miles / Gallon: <strong> {car.Miles_per_Gallon} </strong> >> in Liters/100km: <strong> { Math.round( 235.21 / car.Miles_per_Gallon)} </strong> </Card.Text>
                            <Card.Text>Cylinders: {car.Cylinders} </Card.Text>
                            <Card.Text>Displacement: {car.Displacement} ccm</Card.Text>
                            <Card.Text>Horsepower: {car.Horsepower} hp</Card.Text>
                            <Card.Text>Weight in lbs: <strong>{car.Weight_in_lbs}</strong> Weight in KG: <strong>{Math.round(car.Weight_in_lbs * 0.45359237) }</strong></Card.Text>
                            <Card.Text>Origin: {car.Origin} </Card.Text>
                            <Card.Footer>Year: <strong>{car.Year}</strong></Card.Footer>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        }
        </Wrapper>
        </Layout>
    )
}
const Wrapper = styled.section`
    .custom{
        font-size: 115px;
    }

`