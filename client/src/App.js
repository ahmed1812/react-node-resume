import React from "react";

import Foot from './components/Footer/index';
import About from './pages/About';
import Animation from './components/Animation';
import './App.css';
const App = () => {

  return (
    <div>
     
        <div>
          <About />
        <Animation />
          <Foot />
        </div>
      
    </div>
  );
}


export default App;
