import React, {useState  ,Component } from 'react'

function WelcomeHeading(){
    const[Heading,setHeading]=useState("Quantity Measurement")
    return (
    <div className="WelcomeHeading">
    <div className="WelcomeHeading-text">
    Welcome To {Heading}    
    </div>
    </div>)
}
export default  WelcomeHeading;