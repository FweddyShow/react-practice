import React from "react"
import About from "./components/About.jsx"
import Buttons from "./components/Buttons.jsx"
import Footer from "./components/Footer.jsx"
import Interest from "./components/Interest.jsx"
import Name from "./components/Name.jsx"
import Photo from "./components/Photo.jsx"
import Website from "./components/Website.jsx"
import "./App.css"


export default function App () {
    return (
     <div className="card"> 
        <Photo />
        <Name />
        <Website />
        <Buttons />
        <About />
        <Interest />
        <Footer />
     </div>   
    )
}