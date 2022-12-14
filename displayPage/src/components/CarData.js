import React from "react"
import Card from "react-bootstrap/Card"
import cars from "../data/carData.json"
import Row from "react-bootstrap/Row"
import  Col  from "react-bootstrap/Col"
import {Link} from "gatsby"



export default function CarData(){

    let car = cars.map((one) => (<Col><Card bg="light" className="mt-3">
        <Card.Body as={Link} to="/carFocus" state={{ car: one.Name }}>
            <Card.Img src="#" alt="Currently no image avalable! " />
            <Card.Title className="text-decoration-underline text-center mb-3">{one.Name.toUpperCase()}</Card.Title>
            <Card.Text>Miles / Gallon: <strong> {one.Miles_per_Gallon} </strong> >> in Liters/100km: <strong> { Math.round( 235.21 / one.Miles_per_Gallon)} </strong> </Card.Text>
            <Card.Text>Cylinders: {one.Cylinders} </Card.Text>
            <Card.Text>Displacement: {one.Displacement} ccm</Card.Text>
            <Card.Text>Horsepower: {one.Horsepower} hp</Card.Text>
            <Card.Text>Weight in lbs: <strong>{one.Weight_in_lbs}</strong> Weight in KG: <strong>{Math.round(one.Weight_in_lbs * 0.45359237) }</strong></Card.Text>
            <Card.Text>Origin: {one.Origin} </Card.Text>
            <Card.Footer>Year: <strong>{one.Year}</strong></Card.Footer>
        </Card.Body>
        </Card></Col>))

    return(
        <>
        <Row lg={3} xs={1}>
            {car}
         </Row>
        </>
    )
}