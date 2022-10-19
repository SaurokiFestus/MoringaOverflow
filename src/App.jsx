import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import  {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
function App() {
  

  return (
    <div className="App">
      {/* <Signup/> */}
      <BrowserRouter>
      <Routes>
        <Route exact="true" path="/login" element={<Login/>}/>
        <Route exact="true" path="/signup" element={<Signup/>}/>
        <Route exact="true" path="/navbar" element={<Navbar/>}/>
        {/* <Route exact="true" path="/sidebar" element={<Sidebar/>}/> */}
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
