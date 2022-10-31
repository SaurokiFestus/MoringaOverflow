import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import SideBar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Questions from "./components/Questions";
import EachQuestion from "./components/EachQuestion";
import AskQuestion from "./components/AskQuestion";
import Profile from "./components/Profile";
import About from "./components/About";

import Search from "./components/Search";

function App() {
  const [wordEntered, setWordEntered] = useState("");
  // console.log(wordEntered)

  const [currentUser, setCurrentUser] = useState({});
  const [user, setUser] = useState({});
  const navigate = useNavigate();

<<<<<<< HEAD
  const [user, setUser] = useState({
    id: 2,
    name: "John",
  });
=======
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  if (!isAuthenticated) {
    return <div>
      navigate("/");
    </div>;
  }

  // const [currentUser, setUser] = useState({
  //   id: 2,
  //   name: "John",
  // });
  // let user = currentUser;
>>>>>>> d3634dd95219c3f50a7f3b876ac301f132978b87

  const [questionForm, setQuestionForm] = useState({
    title: "",
    body: "",
    user_id: user.id,
  });

<<<<<<< HEAD
  const [tg, setTg] = useState(true);
=======
  const [tg,setTg]=useState(true)

  console.log(currentUser);

>>>>>>> d3634dd95219c3f50a7f3b876ac301f132978b87

  return (
    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD
        <>
          <Navbar setWordEntered={setWordEntered} />
          <Routes>
            <Route exact="true" path="/" element={<Home />} />

            <Route exact="true" path="/askquestion" element={<AskQuestion />} />

            <Route
              exact="true"
              path="/login"
              element={<Login setUser={setUser} />}
            />
            <Route
              exact="true"
              path="/signup"
              element={<Signup setCurrentUser={setCurrentUser} />}
            />
            {/* <Route exact="true" path="/signup" element={<Signup/>}/> */}
            <Route
              exact="true"
              path="/questions"
              element={<Questions wordEntered={wordEntered} />}
            />
            <Route
              exact="true"
              path="/question/:id"
              element={<EachQuestion />}
            />
            <Route exact="true" path="/about" element={<About />} />
            <Route exact="true" path="/sidebar" element={<SideBar />} />
            <Route exact="true" path="/profile" element={<Profile />} />
          </Routes>
          <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route
              exact="true"
              path="/askquestion"
              element={
                <AskQuestion
                  tg={tg}
                  setTg={setTg}
                  questionForm={questionForm}
                  setQuestionForm={setQuestionForm}
                />
              }
            />
            <Route exact="true" path="/login" element={<Login />} />
            <Route exact="true" path="/signup" element={<Signup />} />
            <Route
              exact="true"
              path="/questions"
              element={<Questions user={user} />}
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
            <Route exact="true" path="/profile" element={<Profile />} />
          </Routes>
        </>
=======
        <Navbar />
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/askquestion" element={<AskQuestion  tg={tg} setTg={setTg} questionForm={questionForm} setQuestionForm={setQuestionForm}/>} />
          <Route exact="true" path="/login" element={<Login />} />
          <Route exact="true" path="/signup" element={<Signup />} />
          <Route exact="true" path="/questions" element={<Questions user={user}  wordEntered={wordEntered}/>} />
          <Route exact="true" path="/question/:id" element={<EachQuestion user={user} setTg={setTg} setQuestionForm={setQuestionForm}/>} />
          <Route exact="true" path="/about" element={<About />} />
          <Route exact="true" path="/sidebar" element={<SideBar />} />
          <Route exact="true" path="/profile" element={<Profile />} />
        </Routes>
>>>>>>> d3634dd95219c3f50a7f3b876ac301f132978b87
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
