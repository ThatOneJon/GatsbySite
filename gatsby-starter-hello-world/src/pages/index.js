import * as React from "react"
import {Link} from "gatsby"
import Layout from "../components/Layout"
import {Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <Layout>
      <Container>   
        <h1>Hello world!</h1>
          <Link to ="/about" >About</Link>
      </Container>
    </Layout>
  )
}
