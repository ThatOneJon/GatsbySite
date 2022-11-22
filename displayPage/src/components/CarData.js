import React from "react"
import Card from "react-bootstrap/Card"
import cars from "../data/carData.json"
import Row from "react-bootstrap/Row"
import  Col  from "react-bootstrap/Col"



export default function CarData(){

    let car = cars.map((one) => (<Col><Card bg="light" className="mt-3">
        <Card.Body>
        <Card.Title>{one.Name}</Card.Title>
            DD
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