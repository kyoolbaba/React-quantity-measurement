import React, { Component } from 'react'
import Units from './Units.jsx'
import UnitInput from './UnitInput.jsx'
import {HistoryProvider} from '../header/HistoryContext'
class MainContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            unitindex:0
        }
        this.setUnit=this.setUnit.bind(this)
    }

    setUnit(unit){
        console.log(unit,"From Main compaoennt")
        this.setState({unitindex:unit})
    }

render(){
    return(
        <div className="MainContainer">
        <h1>Choose Type</h1>
        <Units 
        // setUnit={this.state}
          setUnit={this.setUnit} 
          />
          <HistoryProvider>
        <UnitInput unitindex={this.state.unitindex}  />
        </HistoryProvider>

        </div>
    )
}
}
export default  MainContainer;