import React from 'react';
import logo from './logo.svg';
import './App.css';
import Iframe from 'react-iframe'

function App() {
  return (
    <div className="App">
<Iframe url="https://www.jftna.org/jft/"
        width="100%"
        height="650px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
  );
}

export default App;
