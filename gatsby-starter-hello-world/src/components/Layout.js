import React from "react"
import Navbar from "../components/nav"

// CAN make a layout css and import here, to function everywhere import /layout.css
//GLOBAL COMPONENTS like NAVBAR as a wrapper, instead of importing in every component

export default function Layout({ children }){
      // Props is what is in component (Children) -> destructuring and placing on page
    return(
        //React fragment groups children without extra div
        <>
            <Navbar />
            { children }
        </>
    )
}