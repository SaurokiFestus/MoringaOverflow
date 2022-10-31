import React, { useState, useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import Comment from "./Comment";
import AnswerQuiz from "./AnswerQuiz";

function EachQuestion({ setQuestionForm, setTg, user }) {
  let { id } = useParams();
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState();
  const [timeQ, setTimeQ] = useState();
  const [postEdit, setPostEdit] = useState(true);
  const [askedQuiz, setAskedQuiz] = useState({
    upvote: 0,
    downvote: 0,
    body: "",
    user_id: '',
    question_id: id,
  });

  const fetchDetails = () => {
    fetch(`http://127.0.0.1:3000/questions/${id}`)
      .then((res) => res.json())
      .then((quiz) => {
        setQuestion(quiz);
        setAnswers(quiz.answers);
      });
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  useEffect(() => {
    var d1 = new Date();
    var d2 = new Date(question?.created_at);
    var gap = Math.abs(d1 - d2);
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const txtDay = Math.floor(gap / day);
    const txtHour = Math.floor((gap % day) / hour);
    const txtMinute = Math.floor((gap % hour) / minute);
    const txtSecond = Math.floor((gap % minute) / second);

    setTimeQ({
      days: txtDay,
      hours: txtHour,
      minutes: txtMinute,
      seconds: txtSecond,
    });
  }, [question]);

  function decreaseVotes(answer) {
    const id = answer.id;
    const obj = {
      downvote: answer.downvote - 1,
    };
    fetch(`http://127.0.0.1:3000/answers/${id}/decrease`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((r) => r.json())
      .then((data) => updateList(data));
  }
  function handleEdit(answer) {
    setPostEdit(false);
    setAskedQuiz(answer);
    handleScroll();
  }

  function increaseVotes(answer) {
    const id = answer.id;
    const obj = {
      downvote: answer.downvote - 1,
    };
    fetch(`http://127.0.0.1:3000/answers/${id}/increase`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((r) => r.json())
      .then((data) => updateList(data));
  }
  function updateList(updatedItem) {
    // console.log(updatedItem);
    const updatedItems = answers.map((answer) => {
      if (answer.id === updatedItem.id) {
        return updatedItem;
      } else {
        return answer;
      }
    });
    setAnswers(updatedItems);
  }
  function AddAnswer(addedElem) {
    setAnswers([...answers, addedElem]);
  }

  function updateList(updatedItem) {
    const updatedItems = answers.map((answer) => {
      if (answer.id === updatedItem.id) {
        return updatedItem;
      } else {
        return answer;
      }
    });
    setAnswers(updatedItems);
  }

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleDelete(id) {
    console.log("delete");
    fetch(`http://127.0.0.1:3000/answers/${id}`, {
      method: "DELETE",
    });
    const updatedEvents = answers?.filter((one) => one.id !== id);
    setAnswers(updatedEvents);
  }
  // console.log(timeQ?.days);

  function handleEditQ(question) {
    console.log(question);
    setQuestionForm(question);
    setTg(false);
  }

  return (
    <Fragment>
      <div className="container">
        <div class=" mt-3 d-flex justify-content-between">
          <h2>{question.title}</h2>
          <Link to="/askquestion">
            <button class="btn btn-primary m-1">Ask Question</button>
          </Link>
        </div>
        <span>
          Asked{" "}
          {timeQ?.days > 0
            ? `${timeQ?.days} ${timeQ?.days == 1 ? "day" : "days"} ${
                timeQ?.hours
              } hours ${timeQ?.minutes} mins `
            : `${
                timeQ?.hours > 0
                  ? `${timeQ?.hours} hours `
                  : `${
                      timeQ?.minutes > 0
                        ? `${timeQ?.minutes} minutes `
                        : `${timeQ?.seconds} seconds `
                    }  `
              }`}
          ago
        </span>
        <span className="px-5">Viewed </span>
        <hr></hr>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>{question.body}</p>
              {user?.id === question.user_id ? (
                <Link to="/askquestion">
                  <button
                    onClick={() => handleEditQ(question)}
                    class="bg-info text-white border-0"
                  >
                    Edit
                  </button>
                </Link>
              ) : (
                ""
              )}

              <h6>{answers?.length} Answers</h6>
              {answers?.map((answer) => {
                const x = answer.comments;
                return (
                  <div key={answer.id}>
                    <div className="row">
                      <div className="col-1 p-2 ">
                        <ul className="list-unstyled">
                          <li>
                            <button
                              onClick={() => increaseVotes(answer)}
                              type="button shadow-none"
                              class="btn shadow-none"
                            >
                              <i
                                class="bi bi-caret-up-fill fs-1 text"
                                style={{ color: "#dcdee1" }}
                              ></i>
                            </button>
                          </li>
                          <li>
                            <span className="px-4 fs-6 text p-0">
                              {answer.upvote - answer.downvote}
                            </span>
                          </li>
                          <li>
                            <button
                              onClick={() => decreaseVotes(answer)}
                              type="button shadow-none"
                              class="btn shadow-none"
                            >
                              <i
                                class="bi bi-caret-down-fill fs-1 text"
                                style={{ color: "#dcdee1" }}
                              ></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="col fs-5 pt-3">
                        <p>{answer.body}</p>
                      </div>
                      {user?.id === answer.user_id ? (
                        <span>
                          <button
                            onClick={() => handleDelete(answer.id)}
                            className="bg-danger text-white border-0"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => handleEdit(answer)}
                            className="bg-info mx-2 text-white border-0"
                          >
                            Edit
                          </button>
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    {<Comment answer={answer} user={user} x={x} />}
                  </div>
                );
              })}
            </div>
          </div>
          <AnswerQuiz
            user={user}
            id={id}
            updateList={updateList}
            AddAnswer={AddAnswer}
            postEdit={postEdit}
            setPostEdit={setPostEdit}
            askedQuiz={askedQuiz}
            setAskedQuiz={setAskedQuiz}
          />
        </div>
      </div>
    </Fragment>
  );
}
export default EachQuestion;
