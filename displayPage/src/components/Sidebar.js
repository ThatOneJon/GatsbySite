import React from "react"
import styled from "styled-components"


export default function Sidebar(){
    return(
        <Wrapper>
            <div className="main">
                <p>Sidebar</p>
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

`