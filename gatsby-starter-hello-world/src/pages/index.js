import * as React from "react"
import {Link} from "gatsby"
import Layout from "../components/Layout"
import {Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ExampleButton } from "../examplexStyle/button"
// for styled components import the component and but it in the return!
// for styling css modules can be used, they are included and dont need plugin

export default function Home() {
  return (
    <Layout>
      <Container>   
        <ExampleButton>Click</ExampleButton>
        <h1>Hello world!</h1>
          <Link to ="/about" >About</Link>
      </Container>
    </Layout>
  )
}
