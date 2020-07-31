import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import MainContainer from './maincontainer/Maincontainer'
import {HistoryContent} from './header/HistoryPage'
import {HistoryProvider} from './header/HistoryContext'
export default class MainComponentRouter extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={MainContainer}/>
                <HistoryProvider>              
                  <Route exact path="/history" component={HistoryContent}/>
                </HistoryProvider>
                </div>
        )
    }
}

