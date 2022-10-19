import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Tags from './components/Tags'
import  {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {

  return (
    <div className="App">
      {/* <Signup/> */}
      <BrowserRouter>
      <Routes>
        <Route exact="true" path="/login" element={<Login/>}/>
        <Route exact="true" path="/signup" element={<Signup/>}/>
        <Route exact="true" path="/tags" element={<Tags/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
