import { useState, useEffect } from "react";
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
  const [wordEntered, setWordEntered] = useState("");
  const [user, setUser] = useState();
  // const navigate = useNavigate();
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);

  const [questionForm, setQuestionForm] = useState({
    title: "",
    body: "",
    user_id: user?.id,
    tag_list:''
  });

  const [tg, setTg] = useState(true);


  return (
    <div className="App">

      <div className="main">
        <BrowserRouter>
          <Navbar
            user={user}
            setUser={setUser}
            setWordEntered={setWordEntered}
          />
          <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route
              exact="true"
              path="/askquestion"
              element={
                <AskQuestion
                  user={user}
                  tg={tg}
                  setTg={setTg}
                  questionForm={questionForm}
                  setQuestionForm={setQuestionForm}
                />
              }
            />
            <Route
              exact="true"
              path="/login"
              element={<Login setUser={setUser} />}
            />
            <Route exact="true" path="/signup" element={<Signup />} />
            <Route
              exact="true"
              path="/questions"
              element={<Questions user={user} wordEntered={wordEntered} />}
            />
            <Route
              exact="true"
              path="/side"
              element={<SideBar/>}
            />
            <Route
              exact="true"
              path="/question/:id"
              element={
                <EachQuestion
                  user={user}
                  setTg={setTg}
                  setQuestionForm={setQuestionForm}
                />
              }
            />
            <Route exact="true" path="/about" element={<About />} />
            <Route exact="true" path="/sidebar" element={<SideBar />} />
            {user ? (
              <Route exact="true" path="/profile/:id" element={<Profile />} />            ) : (
              <Route exact="true" path="/home" element={<Home />} />
            )}
          </Routes>
        </BrowserRouter>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
