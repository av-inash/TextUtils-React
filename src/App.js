
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);        // alert ko ek obj bna rhe

  const showAlert = (message, type) => {        // ek function hai jo help krega alert mesg show krne mai
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#1f3b67';
      showAlert("Dark Mode has been enable", "success")
      document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title ='TextUtils is Amazing Mode';

      // },2000);                                  // for showing flatuate in title after some interval of time
      // setInterval(()=>{
      //   document.title ='Install TextUtils Now';

      // },1500);
    }
    else {
      setMode('light')
      document.body.style.background = 'white';
      showAlert("Light Mode has been enable", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils" />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About/>}>
              
            </Route>

            <Route exact path="/" element ={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}>
              

            </Route>
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
