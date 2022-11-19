import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Pagination from "./Pagination";
const questions = ({ user, wordEntered}) => {
  const [questions, setQuestions] = useState([]);
  const [mq, setMq] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [quizsPerPage] = useState(5);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredData = questions.filter((quiz) => {
    if (wordEntered === "") {
      return quiz;
    } else {
      return (
        quiz.title.toLowerCase().includes(wordEntered.toLowerCase()) ||
        quiz.body.toLowerCase().includes(wordEntered.toLowerCase())
      );
    }
  });
  let now = new Date();

  function today(arr) {
    let last7Days = new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000);
    const data = arr.filter(
      (p) =>
        new Date(p.created_at) <= now && new Date(p.created_at) >= last7Days
    );

    setQuestions(data);
  }

  function week(arr) {
    let last7Days = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000);

    const data = arr.filter(
      (p) =>
        new Date(p.created_at) <= now && new Date(p.created_at) >= last7Days
    );

    setQuestions(data);
  }
  function month(arr) {
    var date = new Date(),
      y = date.getFullYear(),
      m = date.getMonth();
    var firstDay = new Date(y, m, 1);
    const data = arr.filter(
      (p) => new Date(p.created_at) <= now && new Date(p.created_at) >= firstDay
    );

    setQuestions(data);
  }
  function AllData(arr) {
    setQuestions(arr);
  }

  // Get current posts
  const indexOfLastQuiz = currentPage * quizsPerPage;
  const indexOfFirstQuiz = indexOfLastQuiz - quizsPerPage;
  const currentQuizs = filteredData.slice(indexOfFirstQuiz, indexOfLastQuiz);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/questions", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        r.json().then((quizs) => {
          setQuestions(quizs);
          setMq(quizs);
        });
      }
    });
  }, []);

  function handleDelete(id) {
    console.log("delete");
    fetch(`http://127.0.0.1:3000/questions/${id}`, {
      method: "DELETE",
    });
    const updatedEvents = questions?.filter((one) => one.id !== id);
    setQuestions(updatedEvents);
  }
  function increaseViews(id) {
    fetch(`http://127.0.0.1:3000/views/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="my-2 ">
      <div class="container  mt-3 d-flex justify-content-between">
        <h2>All Questions</h2>

        <Link to="/askquestion">
          <button class="btn btn-primary m-1">Ask Question</button>
        </Link>
      </div>

      <div className="container d-flex justify-content-between">
        <div>
          {questions.length === 0 ? (
            <>
              <div class="spinner-border text-primary mx-2" role="status"></div>
              <span class="">Loading...</span>
            </>
          ) : (
            ""
          )}
          <p>{questions?.length} questions</p>
          <p className="text-warning">
            {currentQuizs?.length === 0 ? "No record" : ""}
          </p>
        </div>

        <div class="btn-group " role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-primary border-secondary"
            onClick={() => today(mq)}
          >
            Today
          </button>
          <button
            type="button "
            class="btn btn-primary border-secondary"
            onClick={() => week(mq)}
          >
            Week
          </button>
          <button
            type="button"
            class="btn btn-primary border-secondary"
            onClick={() => month(mq)}
          >
            Month
          </button>
          <button
            type="button"
            class="btn btn-primary border-secondary"
            onClick={() => AllData(mq)}
          >
            All
          </button>
        </div>
      </div>

      <div>
        <hr style={{ size: "80px", width: "100%" }}></hr>
      </div>
      <div className="container ">
        {currentQuizs.map((quiz) => {
          var d1 = new Date();
          var d2 = new Date(quiz?.created_at);
          var gap = Math.abs(d1 - d2);
          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;

          const days = Math.floor(gap / day);
          const hours = Math.floor((gap % day) / hour);
          const minutes = Math.floor((gap % hour) / minute);
          const seconds = Math.floor((gap % minute) / second);

          const result = quiz.answers?.reduce((accumulator, obj) => {
            return accumulator + (obj.upvote - obj.downvote);
          }, 0);
          // console.log(result);
          return (
            <>
              <div key={quiz.id} className="row ">
                <div className="col-2  text-end">
                  <ul className="list-unstyled">
                    <li>{result} votes</li>
                    <li>{quiz.answers?.length} Answers</li>
                    <li>{quiz?.views} views</li>
                    <span>
                      {user?.id === quiz.user?.id ? (
                        <i className="bi bi-trash border-0" onClick={() => handleDelete(quiz.id)} style={{cursor: "pointer",color:'red'}}></i>
                        // <button
                        //   onClick={() => handleDelete(quiz.id)}
                        //   className="bg-danger text-white border-0"
                        // >
                        //   Delete
                        // </button>
                      ) : (
                        ""
                      )}
                    </span>
                  </ul>
                </div>
                <div
                  key={quiz.id}
                  className="col"
                  style={{ backgroundColor: "#f6f6f6" }}
                >
                  <ul className="list-unstyled">
                    <Link
                      to={`/question/${quiz.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <li
                        onClick={() => increaseViews(quiz.id)}
                        style={{ color: "#0b7dda" }}
                      >
                        {quiz.title}
                      </li>
                    </Link>
                    <div
                      className="brief"
                      dangerouslySetInnerHTML={{
                        __html: quiz.body,
                      }}
                    ></div>
                  </ul>
                  <div className="d-flex justify-content-between">
                    <div>
                      {quiz.tag_list?.map((tag) => {
                        return (
                          <a
                            href=""
                            className="p-1 text-black rounded"
                            style={{
                              backgroundColor: "#e0ecf4",
                              marginRight: "10px",
                              textDecoration: "none",
                            }}
                          >
                            {tag}
                          </a>
                        );
                      })}
                    </div>

                    <small>
                      <i>{quiz.user.username} </i>
                      asked {questions.length > 0 ?days > 0
                        ? ` ${days} ${
                            days == 1 ? "day" : "days"
                          } ${hours} hours ${minutes} mins `
                        : `${
                            hours > 0
                              ? `${hours} hours `
                              : `${
                                  minutes > 0
                                    ? `${minutes} minutes `
                                    : `${seconds} seconds `
                                }  `
                          }`:''}
                      
                      ago
                    </small>
                  </div>
                </div>

                <div>
                  <hr className="" style={{ size: "80px", width: "100%" }}></hr>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <Pagination
        quizsPerPage={quizsPerPage}
        totalQuizs={questions.length}
        paginate={paginate}
      />
    </div>
  );
};
export default questions;
