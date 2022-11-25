import React from "react"
import styled from "styled-components"
import data from "../data/carData.json"
import { navigate } from "gatsby"


export default function Sidebar(){
    let years = data.map((d)=>d.Year.split("-")[0])
    let otheryears = new Set(years)

    let countries = data.map((c) => c.Origin)
    let countrySet = new Set(countries)

    function handleClick(event){
        event.target.name === "country" 
        ? 
        navigate("/carQuery", { state:{value:event.target.value,year :false, country:true }}) 
        :
        navigate("/carQuery", { state:{value:event.target.value, year:true, country: false}}) 
    }

    return(
        <Wrapper>
            <div className="main">
                <h1>Tags</h1>
                <h2> Years ( {otheryears.size} ) </h2>
                <ul>
                    {otheryears.size > 0 ? Array.from(otheryears).map((year) => (<li style={{marginTop:"10px"}}><button value={year} name ="year" onClick={(event) => handleClick(event)}>{year} ( {years.filter(y => y === year).length} ) </button></li>)) : null}
                </ul>
                <h2>Countries ( {countrySet.size} )</h2>
                <ul>
                    {countrySet.size > 0 ? Array.from(countrySet).map(country => (<li style={{marginTop:"10px"}} > <button name="country" onClick = {(event) => handleClick(event) } value={country}> {country} ( {countries.filter(word => word === country).length} ) </button> </li>)) : null}
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
        background-color: #13a13e;
        min-width: 18vw;
        height: 100vh;
        margin-left: 3px;
        text-align: center;
    }
    @media only screen and (min-width: 1000px) {
        .main{
            position: fixed;

        }
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