import React, { Component } from 'react'
import Units from './Units.jsx'
import UnitInput from './UnitInput.jsx'
class MainContainer extends Component{
render(){
    return(
        <div className="MainContainer">
        <h1>Choose Type</h1>
        <Units/>
        <UnitInput/>
        </div>
    )
}
}
export default  MainContainer;