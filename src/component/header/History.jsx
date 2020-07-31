import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class History extends Component{

    constructor(props){
        super(props)
        this.state = {
            clicked:true
        }
        this.handleClick=this.handleClick.bind(this)
    }

handleClick(){
 this.setState({clicked:!this.state.clicked})
 console.log(this.clicked)
}


    render(){
        let link;
        if(this.clicked){
            link= <Link to='/history' onClick={this.handleClick} className="">MainPage</Link>
        }
        else
        {
            link= <Link to='/'  onClick={this.handleClick}  className="">History</Link>
        
        }
        return (
           <div className="History">
          <Link to={this.state.clicked? '/history':'/'} onClick={this.handleClick} className="">{this.state.clicked? 'History':'MainPage' }</Link>
           </div>
        )
    }

}
export default History