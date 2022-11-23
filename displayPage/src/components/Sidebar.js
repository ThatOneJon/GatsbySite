import React from "react"
import styled from "styled-components"
import Card from "react-bootstrap/Card"
import data from "../data/carData.json"

export default function Sidebar(){
    let years = data.map((d)=>d.Year.split("-")[0])
    let otheryears = new Set(years)

    return(
        <Wrapper>
            <div className="main">
                <h1>Tags</h1>
                <h2> Years ( {otheryears.size} ) </h2>
                <ul>
                    {otheryears.size > 0 ? Array.from(otheryears).map((year) => (<li>{year}</li>)) : null}
                </ul>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    p{
        color: red;
    }
    .main{
        background-color: green;
        min-width: 18vw;
        height: 100vh;
        margin-left: 3px;
        text-align: center;
    }

    h1 {
        text-decoration: underline;
        margin-bottom: 30px;
    }
    h2 {
        text-decoration: underline;
    }

    ul{
        list-style-type: none;
        font-size: 30px;
    }

`