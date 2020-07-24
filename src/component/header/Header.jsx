import React, { Component } from 'react'
import LogoName from './LogoName.jsx'
import History from './History.jsx'
import WelcomeHeading from './WelcomeHeading.jsx'
// import '../'
// import
class Header extends Component{

    render(){
        return (
            <header>
            <LogoName/>
            <History/>
            <WelcomeHeading/>
            </header>
        )
    }

}
export default Header