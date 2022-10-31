import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Pagination from "./Pagination";
const questions = ({ user, wordEntered }) => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [quizsPerPage] = useState(5);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const filteredData = questions.filter((quiz) => {
   
    if (wordEntered === "") {
      return quiz;
    } else {
      return( quiz.title.toLowerCase().includes(wordEntered.toLowerCase()) ||
      quiz.body.toLowerCase().includes(wordEntered.toLowerCase()))
    }
  });


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

  return (
    <div className="my-5 ">
      <div class="container  mt-3 d-flex justify-content-between">
        <h2>All Questions</h2>

        <Link to="/askquestion">
          <button class="btn btn-primary m-1">Ask Question</button>
        </Link>
      </div>
      <div className="container">
        <p>{questions?.length} questions</p>
      </div>

      <div>
        <hr style={{ size: "80px", width: "100%" }}></hr>
      </div>
      <div className="container ">
        {currentQuizs.map((quiz) => {
          const result = quiz.answers?.reduce((accumulator, obj) => {
            return accumulator + (obj.upvote - obj.downvote);
          }, 0);
          // console.log(result);
          return (
            <>
              <div key={quiz.id} className="row">
                <div className="col-2 text-end">
                  <ul className="list-unstyled">
                    <li>{result} votes</li>
                    <li>{quiz.answers?.length} Answers</li>
                    <li>6 views</li>
                    <span>
                      {user?.id === quiz.user_id ? (
                        <button
                          onClick={() => handleDelete(quiz.id)}
                          className="bg-danger text-white border-0"
                        >
                          Delete
                        </button>
                      ) : (
                        ""
                      )}
                    </span>
                  </ul>
                </div>
                <div
                  key={quiz.id}
                  style={{ backgroundColor: "#f6f6f6" }}
                  className="col-9 col-sm-8"
                >
                  <ul className="list-unstyled">
                    <Link
                      to={`/question/${quiz.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <li style={{ color: "#0b7dda" }}>{quiz.title}</li>
                    </Link>
                    <li>{quiz.body}</li>
                  </ul>
                </div>

                <div>
                  <hr
                    className="mx-5"
                    tyle={{ size: "80px", width: "100%" }}
                  ></hr>
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
