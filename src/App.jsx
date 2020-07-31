import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MainComponentRouter from './component/MainComponentRouter'
import Header from './component/header/Header.jsx'
import MainContainer from './component/maincontainer/Maincontainer.jsx'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>    <div className="App">
     <div>
     <Header></Header>
     <MainComponentRouter/>
     </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
