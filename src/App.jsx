import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import  {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Home'
import SideBar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Questions from './components/Questions'
import EachQuestion from './components/EachQuestion'
import AskQuestion from './components/AskQuestion'

function App() {
  return (
    <div className="App">

     

      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact="true" path="/" element={<Home/>}/>

      <Route exact="true" path="/askquestion" element={<AskQuestion/>}/>

        <Route exact="true" path="/login" element={<Login/>}/>
        <Route exact="true" path="/signup" element={<Signup/>}/>
        <Route exact="true" path="/signup" element={<Signup/>}/>
        <Route exact="true" path="/questions" element={<Questions/>}/>
        <Route exact="true" path="/question/:id" element={<EachQuestion/>}/>
        {/* <Route exact="true" path="/about" element={<About/>}/> */}
        <Route exact="true" path="/sidebar" element={<SideBar/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
