import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import  {BrowserRouter, Route, Routes} from "react-router-dom"
// import About from './components/About'
import Home from './components/Home'



function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      <BrowserRouter>
      <Routes>
      <Route exact="true" path="/" element={<Home/>}/>

        <Route exact="true" path="/login" element={<Login/>}/>
        <Route exact="true" path="/signup" element={<Signup/>}/>
        {/* <Route exact="true" path="/allquestions" element={<Allquestions/>}/> */}
        {/* <Route exact="true" path="/about" element={<About/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
