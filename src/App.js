import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
// import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#10002c';
      showAlert("Changed to dark mode", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Changed to light mode", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container" >
        <Routes>   
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} onShowAlert={showAlert}/>} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
