<<<<<<< HEAD
<<<<<<< HEAD
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

import Profile from "./components/Profile"
import About from "./components/About"

import Search from './components/Search'

function App() {
  const [wordEntered, setWordEntered] = useState("");
  // console.log(wordEntered)

  const [currentUser, setCurrentUser] = useState({});
  const [user, setUser] = useState({});
  console.log(currentUser);
  return (
    <div className="App">
     
=======
=======
>>>>>>> 0d85116d8ccbdcd9d3f7d6b4a4270a5f762c3717
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SideBar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Questions from "./components/Questions";
import EachQuestion from "./components/EachQuestion";
import AskQuestion from "./components/AskQuestion";
import Profile from "./components/Profile";
import About from "./components/About";

import Search from './components/Search'

function App() {
<<<<<<< HEAD
  const [user, setUser] = useState({
=======
  const [wordEntered, setWordEntered] = useState("");
  // console.log(wordEntered)

  // const [currentUser, setCurrentUser] = useState({});
  // const [user, setUser] = useState({});

  const [currentUser, setUser] = useState({
>>>>>>> 0d85116d8ccbdcd9d3f7d6b4a4270a5f762c3717
    id: 2,
    name: "John",
  });


  const [questionForm, setQuestionForm] = useState({
    title: "",
    body: "",
    user_id: user.id,
  });

  const [tg,setTg]=useState(true)
>>>>>>> 2f32cf1c0ca14bd921169e8c1c076435c02e62aa



  return (
    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD
<<<<<<< HEAD
      <Navbar setWordEntered={setWordEntered}/>
      <Routes>
      <Route exact="true" path="/" element={<Home/>}/>

      <Route exact="true" path="/askquestion" element={<AskQuestion/>}/>

        <Route exact="true" path="/login" element={<Login setUser={setUser}/>}/>
        <Route exact="true" path="/signup" element={<Signup setCurrentUser={setCurrentUser}/>}/>
        {/* <Route exact="true" path="/signup" element={<Signup/>}/> */}
        <Route exact="true" path="/questions" element={<Questions wordEntered={wordEntered}/>}/>
        <Route exact="true" path="/question/:id" element={<EachQuestion/>}/>
        <Route exact="true" path="/about" element={<About/>}/>
        <Route exact="true" path="/sidebar" element={<SideBar/>}/>
        <Route exact="true" path="/profile" element={<Profile/>}/>

      </Routes>
=======
        <Navbar user={user}/>
=======
        <Navbar />
>>>>>>> 0d85116d8ccbdcd9d3f7d6b4a4270a5f762c3717
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/askquestion" element={<AskQuestion  tg={tg} setTg={setTg} questionForm={questionForm} setQuestionForm={setQuestionForm}/>} />
          <Route exact="true" path="/login" element={<Login />} />
          <Route exact="true" path="/signup" element={<Signup />} />
          <Route exact="true" path="/questions" element={<Questions user={user} />} />
          <Route exact="true" path="/question/:id" element={<EachQuestion user={user} setTg={setTg} setQuestionForm={setQuestionForm}/>} />
          <Route exact="true" path="/about" element={<About />} />
          <Route exact="true" path="/sidebar" element={<SideBar />} />
          <Route exact="true" path="/profile" element={<Profile />} />
        </Routes>
<<<<<<< HEAD
>>>>>>> 2f32cf1c0ca14bd921169e8c1c076435c02e62aa
=======
>>>>>>> 0d85116d8ccbdcd9d3f7d6b4a4270a5f762c3717
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
