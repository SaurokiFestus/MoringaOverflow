import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Questions from './components/Questions'
import  {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './components/About'
import Home from './components/Home'
import SideBar from './components/Sidebar/Sidebar'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route exact="true" path="/" element={<Home/>}/>
      {/* <Route exact="true" path="/navbar" element={<Navbar/>}/> */}
        <Route exact="true" path="/login" element={<Login/>}/>
        <Route exact="true" path="/signup" element={<Signup/>}/>
        <Route exact="true" path="/questions" element={<Questions/>}/>
        <Route exact="true" path="/about" element={<About/>}/>
        <Route exact="true" path="/sidebar" element={<SideBar/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
