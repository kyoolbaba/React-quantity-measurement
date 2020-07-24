import React, { Component } from 'react'
import Units from './Units.jsx'
class MainContainer extends Component{
render(){
    return(
        <div className="MainContainer">
        <h1>Choose Type</h1>
        <Units/>
        </div>
    )
}
}
export default  MainContainer;