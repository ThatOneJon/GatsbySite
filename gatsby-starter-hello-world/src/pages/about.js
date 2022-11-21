import React from "react"
import styled from "styled-components"
//Way to use styled components directly inside component

export default function About() {
    return(
        <Wrapper>
            <h1>TESTING </h1>
            Hello about
        </Wrapper>
    )
}

const Wrapper = styled.section`
color: red;
h1{
font-size: 200%;
color: green;
}
`
