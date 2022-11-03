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
  console.log(user);
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);
  console.log(user?.id);

  const [questionForm, setQuestionForm] = useState({
    title: "",
    body: "",
    user_id: user?.id,
  });

  const [tg, setTg] = useState(true);

  console.log(questionForm);

  return (
    <div className="App vh-100">
      <BrowserRouter>
        <Navbar user={user} setWordEntered={setWordEntered} />
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
            <Route exact="true" path="/profile" element={<Profile />} />
          ) : (
            <Route exact="true" path="/" element={<Home />} />
          )}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
