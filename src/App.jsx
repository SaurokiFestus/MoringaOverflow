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

function App() {
  const [user, setUser] = useState({
    id: 2,
    name: "John",
  });


  const [questionForm, setQuestionForm] = useState({
    title: "",
    body: "",
    user_id: user.id,
  });

  const [tg,setTg]=useState(true)



  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user}/>
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
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
