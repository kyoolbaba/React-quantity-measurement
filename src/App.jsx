import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './style/header.scss'
import Header from './component/header/Header.jsx'
import MainContainer from './component/maincontainer/Maincontainer.jsx'
function App() {
  return (
    <div className="App">
     <div>
     <Header></Header>
     <MainContainer/>
     </div>
    </div>
  );
}

export default App;
