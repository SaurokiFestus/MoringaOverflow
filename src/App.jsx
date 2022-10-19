import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Questions from './components/Questions/Questions'
import  {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './components/About'


function App() {
  

  return (
    <div className="App">
      {/* <Signup/> */}
      <BrowserRouter>
      <Routes>
        <Route exact="true" path="/login" element={<Login/>}/>
        <Route exact="true" path="/signup" element={<Signup/>}/>
        <Route exact="true" path="/questions" element={<Questions/>}/>
        <Route exact="true" path="/about" element={<About/>}/>

      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
