import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"



export default function ContactForm() {
    return(
        <>
        <Form className="mt-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Your Message to us: </Form.Label>
            <Form.Control as="textarea" rows={8} />

        </Form.Group>   
            <Button style = {{backgroundColor:"#13a13e"}}type="submit" onClick={() => alert("Sent!")}>Submit</Button>
        </Form>
        </>
    )
}